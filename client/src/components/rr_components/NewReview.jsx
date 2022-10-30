/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useRef } from 'react';
import _ from 'underscore';
import axios from 'axios';
import Characteristic from './Characteristic.jsx';

const NewReview = ({
  data,
  qualities,
  status,
  setStatus,
}) => {
  const [rating, setRating] = useState(null);
  const [recommend, setRecommend] = useState(true);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [remainingChars, setRemainingChars] = useState('Minimum required characters left: 50');
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const oneStar = useRef(null);
  const twoStar = useRef(null);
  const threeStar = useRef(null);
  const fourStar = useRef(null);
  const fiveStar = useRef(null);
  const charBtns = useRef([]);
  const recommended = useRef(null);

  const emptyReview = useRef(null);
  const emptyCharacteristics = useRef(null);
  const emptyBody = useRef(null);
  const shortBody = useRef(null);
  const emptyName = useRef(null);
  const emptyEmail = useRef(null);
  const invalidEmail = useRef(null);

  const stars = {
    0: oneStar,
    1: twoStar,
    2: threeStar,
    3: fourStar,
    4: fiveStar,
  };

  const ratings = {
    1: '- Poor',
    2: '- Fair',
    3: '- Average',
    4: '- Good',
    5: '- Great',
    null: '',
  };

  // eslint-disable-next-line camelcase
  const product_id = parseInt(data.product_id, 10);

  const uploadWidget = cloudinary.createUploadWidget(
    {
      cloudName: 'dr31wlnyj',
      uploadPreset: 'front-end-capstone',
      maxFiles: 1,
    },
    (err, res) => {
      if (!err && res && res.event === 'success') {
        const photo = res.info.secure_url;
        setPhotos([...photos, photo]);
      }
    },
  );

  const rate = (num) => {
    for (let i = 0; i < num; i += 1) {
      stars[i].current.classList.add('full-star');
    }
    for (let i = 0; i < 5 - num; i += 1) {
      stars[num + i].current.classList.remove('full-star');
    }
    setRating(num);
    emptyReview.current.style.display = 'none';
  };

  const handleRecommend = () => {
    setRecommend(true);
  };

  const handleNotRecommend = () => {
    setRecommend(false);
  };

  const handleSummary = (event) => {
    setSummary(event.target.value);
  };

  const handleBody = (event) => {
    setBody(event.target.value);
    setRemainingChars(event.target.value.length < 50 ? `Minimum required characters left: ${50 - event.target.value.length}` : 'Minimum Reached');
    emptyBody.current.style.display = 'none';
    shortBody.current.style.display = 'none';
  };

  const handleAddImage = () => {
    uploadWidget.open();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    emptyName.current.style.display = 'none';
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    emptyEmail.current.style.display = 'none';
    invalidEmail.current.style.display = 'none';
  };

  const emailIsInvalid = () => {
    const addressParts = email.split('@');
    if (addressParts.length !== 2) return true;
    const prefix = addressParts[0];
    const domain = addressParts[1];
    let validCharacters = 'qwertyuiopasdfghjklzxcvbnm1234567890-_.';
    let semiValidCharacters = '-_.';

    // prefixes
    if (semiValidCharacters.includes(prefix[0])
      || semiValidCharacters.includes(prefix[prefix.length - 1])) return true;

    for (let i = 0; i < prefix.length; i += 1) {
      if (!validCharacters.includes(prefix[i])) {
        return true;
      }

      if (semiValidCharacters.includes(prefix[i]) && semiValidCharacters.includes(prefix[i + 1])) {
        return true;
      }
    }

    // domains

    const domainParts = domain.split('.');
    if (domainParts.length < 2) return true;
    const suffix = domainParts[domainParts.length - 1];
    validCharacters = 'qwertyuiopasdfghjklzxcvbnm1234567890-.';
    semiValidCharacters = '-.';

    if (suffix.length < 2) return true;

    for (let i = 0; i < domain.length; i += 1) {
      if (!validCharacters.includes(domain[i])) {
        return true;
      }

      if (semiValidCharacters.includes(domain[i]) && semiValidCharacters.includes(domain[i + 1])) {
        return true;
      }
    }

    return false;
  };

  const hasNoErrors = () => {
    let noErrors = true;
    if (!rating) {
      noErrors = false;
      emptyReview.current.style.display = 'block';
    }

    if (_.size(characteristics) !== _.size(data.characteristics)) {
      noErrors = false;
      emptyCharacteristics.current.style.display = 'block';
    }

    if (!body.length) {
      noErrors = false;
      emptyBody.current.style.display = 'block';
    } else if (body.length < 50) {
      noErrors = false;
      shortBody.current.style.display = 'block';
    }

    if (!name.length) {
      noErrors = false;
      emptyName.current.style.display = 'block';
    }

    if (!email.length) {
      noErrors = false;
      emptyEmail.current.style.display = 'block';
    } else if (emailIsInvalid()) {
      noErrors = false;
      invalidEmail.current.style.display = 'block';
    }
    return noErrors;
  };

  const exitNewReview = () => {
    setStatus('hidden');
    rate(0);
    setRating(null);
    recommended.current.checked = true;
    setRecommend(true);
    _.each(charBtns.current, (btn) => {
      if (btn) btn.checked = false;
    });
    setCharacteristics({});

    setSummary('');
    setBody('');
    setPhotos([]);
    setName('');
    setEmail('');
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // if (hasNoErrors()) {
    //   const completeReview = {
    //     // eslint-disable-next-line camelcase
    //     product_id,
    //     rating,
    //     summary,
    //     body,
    //     recommend,
    //     name,
    //     email,
    //     photos,
    //     characteristics,
    //   };
    //   axios.post('/reviews', completeReview).then(exitNewReview);
    // }
    const completeReview = {
      // eslint-disable-next-line camelcase
      product_id,
      rating,
      summary,
      body,
      recommend,
      name,
      email,
      photos,
      characteristics,
    };
    // axios.post('/reviews', completeReview).then(exitNewReview);
  };

  const addImgBtn = photos.length < 5 ? (
    <button className="fa fa-circle-plus add-img-btn" type="button" onClick={handleAddImage} />
  ) : <div />;

  return (
    <div className={status} id="new-review">
      <button type="button" className="exit-btn fa fa-xmark" onClick={exitNewReview} />
      <form>
        <div className="review-section">
          Overall rating (mandatory)
          <div className="select-star-rating" required>
            {_.map(stars, (star, num) => (
              <button key={num} type="button" className="star-btn fa fa-star star" ref={star} onClick={() => { rate(parseInt(num, 10) + 1); }} />
            ))}
            {ratings[rating]}
          </div>
          <div className="error" ref={emptyReview}>
            <small>This field is required</small>
          </div>
        </div>
        <div className="review-section">
          Do you recommend this product? (mandatory)
          <fieldset className="review-radio-select">
            <div>
              <input ref={recommended} type="radio" value="yes" id="recommend" name="rec" onChange={handleRecommend} defaultChecked />
              <label htmlFor="recommend">Yes</label>
            </div>

            <div>
              <input type="radio" value="no" id="not-recommend" name="rec" onChange={handleNotRecommend} />
              <label htmlFor="not-recommend">No</label>
            </div>
          </fieldset>
        </div>

        <div className="review-section">
          Characteristics (mandatory)
          <fieldset className="review-radio-select">
            {_.map(data.characteristics, (char, i) => (
              <Characteristic
                key={char.id}
                char={char}
                i={i}
                data={data}
                characteristics={characteristics}
                setCharacteristics={setCharacteristics}
                qualities={qualities}
                emptyCharacteristics={emptyCharacteristics}
                charBtns={charBtns}
              />
            ))}
          </fieldset>
        </div>

        <div className="error" ref={emptyCharacteristics}>
          <small>This field is required</small>
        </div>

        <div className="review-section">
          Review Summary
          <div className="text-input">
            <input type="text" value={summary} onChange={handleSummary} maxLength="60" placeholder="Example: Best purchase ever!" size="60" />
          </div>
        </div>

        <div className="review-section">
          Review body (mandatory)
          <div className="text-input">
            <textarea value={body} onChange={handleBody} minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" rows="10" cols="60" required />
          </div>
          {remainingChars}
          <div className="error" ref={emptyBody}>
            <small>This field is required</small>
          </div>
          <div className="error" ref={shortBody}>
            <small>Body must be at least 50 characters long</small>
          </div>
        </div>

        <div className="review-section">
          Upload your photos
          <div className="photo-list">
            {_.map(photos, (url) => (
              // eslint-disable-next-line jsx-a11y/control-has-associated-label
              <div className="img-thumbnail" key={url}>
                <a href={url} rel="noreferrer" target="_blank">
                  <img id={url} className="cropped-img" src={url} alt="" />
                </a>
                <button
                  type="button"
                  className="fa fa-circle-xmark remove-img"
                  onClick={() => {
                    setPhotos(_.filter(photos, (photo) => (
                      photo !== url
                    )));
                  }}
                />
              </div>
            ))}
            {addImgBtn}
          </div>
        </div>
        <div className="review-section">
          What is your name (mandatory)
          <div className="text-input">
            <input type="text" value={name} onChange={handleNameChange} maxLength="60" placeholder="Example: jackson11!" size="60" required />
          </div>
          <small className="privacy-warning">For privacy reasons, do not use your full name or email address</small>
          <div className="error" ref={emptyName}>
            <small>This field is required</small>
          </div>
        </div>

        <div className="review-section">
          Your email (mandatory)
          <div className="text-input">
            <input type="email" value={email} onChange={handleEmailChange} maxLength="60" placeholder="Example: jackson11@email.com" size="60" required />
          </div>
          <div className="error" ref={emptyEmail}>
            <small>This field is required</small>
          </div>
          <div className="error" ref={invalidEmail}>
            <small>Invalid email</small>
          </div>
        </div>
        <button className="submit-button submit-review" type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default NewReview;
