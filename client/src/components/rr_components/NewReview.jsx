import React, { useState } from 'react';
import _ from 'underscore';
import axios from 'axios';
import Characteristic from './Characteristic.jsx';

const NewReview = ({ data, qualities }) => {
  const [rating, setRating] = useState(null);
  const [recommend, setRecommend] = useState(true);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [remainingChars, setRemainingChars] = useState('Minimum required characters left: 50');
  const [photos, setPhotos] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
      maxFiles: 5,
    },
    (err, res) => {
      if (!err && res && res.event === 'success') {
        const photo = res.info.secure_url;
        setPhotos([...photos, photo]);
      }
    },
  );

  const oneStar = () => {
    document.getElementById('one-star').classList.add('full-star');
    document.getElementById('two-star').classList.remove('full-star');
    document.getElementById('three-star').classList.remove('full-star');
    document.getElementById('four-star').classList.remove('full-star');
    document.getElementById('five-star').classList.remove('full-star');
    document.getElementById('empty-review').style.display = 'none';
    setRating(1);
  };

  const twoStar = () => {
    document.getElementById('one-star').classList.add('full-star');
    document.getElementById('two-star').classList.add('full-star');
    document.getElementById('three-star').classList.remove('full-star');
    document.getElementById('four-star').classList.remove('full-star');
    document.getElementById('five-star').classList.remove('full-star');
    document.getElementById('empty-review').style.display = 'none';
    setRating(2);
  };

  const threeStar = () => {
    document.getElementById('one-star').classList.add('full-star');
    document.getElementById('two-star').classList.add('full-star');
    document.getElementById('three-star').classList.add('full-star');
    document.getElementById('four-star').classList.remove('full-star');
    document.getElementById('five-star').classList.remove('full-star');
    document.getElementById('empty-review').style.display = 'none';
    setRating(3);
  };

  const fourStar = () => {
    document.getElementById('one-star').classList.add('full-star');
    document.getElementById('two-star').classList.add('full-star');
    document.getElementById('three-star').classList.add('full-star');
    document.getElementById('four-star').classList.add('full-star');
    document.getElementById('five-star').classList.remove('full-star');
    document.getElementById('empty-review').style.display = 'none';
    setRating(4);
  };

  const fiveStar = () => {
    document.getElementById('one-star').classList.add('full-star');
    document.getElementById('two-star').classList.add('full-star');
    document.getElementById('three-star').classList.add('full-star');
    document.getElementById('four-star').classList.add('full-star');
    document.getElementById('five-star').classList.add('full-star');
    document.getElementById('empty-review').style.display = 'none';
    setRating(5);
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
    document.getElementById('empty-body').style.display = 'none';
    document.getElementById('short-body').style.display = 'none';
  };

  const handleAddImage = () => {
    uploadWidget.open();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    document.getElementById('empty-name').style.display = 'none';
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    document.getElementById('empty-email').style.display = 'none';
    document.getElementById('invalid-email').style.display = 'none';
  };

  const invalidEmail = () => {
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
      document.getElementById('empty-review').style.display = 'block';
    }

    if (_.size(characteristics) !== _.size(data.characteristics)) {
      noErrors = false;
      document.getElementById('empty-characteristics').style.display = 'block';
    }

    if (!body.length) {
      noErrors = false;
      document.getElementById('empty-body').style.display = 'block';
    } else if (body.length < 50) {
      noErrors = false;
      document.getElementById('short-body').style.display = 'block';
    }

    if (!name.length) {
      noErrors = false;
      document.getElementById('empty-name').style.display = 'block';
    }

    if (!email.length) {
      noErrors = false;
      document.getElementById('empty-email').style.display = 'block';
    } else if (invalidEmail()) {
      noErrors = false;
      document.getElementById('invalid-email').style.display = 'block';
    }
    return noErrors;
  };

  const exitNewReview = () => {
    document.getElementById('new-review').style.display = 'none';

    setRating(null);

    document.getElementById('recommend').checked = true;
    setRecommend(true);

    const charBtns = document.getElementsByClassName('char-btn');
    _.each(charBtns, (btn) => {
      btn.checked = false;
    });
    setCharacteristics({});

    setSummary('');
    setBody('');
    setPhotos([]);
    setName('');
    setEmail('');
  };

  const handleSubmit = () => {
    if (hasNoErrors()) {
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
      console.log(completeReview);
      axios.post('/reviews', completeReview).then(exitNewReview);
    }
  };

  const addImgBtn = photos.length < 5 ? (
    /* eslint-disable-next-line jsx-a11y/control-has-associated-label */
    <button className="fa fa-circle-plus add-img-btn" type="button" onClick={handleAddImage} />
  ) : <div />;

  return (
    <div id="new-review">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" className="exit-btn fa fa-xmark" onClick={exitNewReview} />
      <form>
        <div className="review-section">
          Overall rating (mandatory)
          <div className="select-star-rating">
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="star-btn fa fa-star star" id="one-star" onClick={oneStar} />
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="star-btn fa fa-star star" id="two-star" onClick={twoStar} />
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="star-btn fa fa-star star" id="three-star" onClick={threeStar} />
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="star-btn fa fa-star star" id="four-star" onClick={fourStar} />
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="star-btn fa fa-star star" id="five-star" onClick={fiveStar} />
            {ratings[rating]}
          </div>
          <div className="error" id="empty-review">
            <small>This field is required</small>
          </div>
        </div>
        <div className="review-section">
          Do you recommend this product? (mandatory)
          <fieldset className="review-radio-select">
            <div>
              <input type="radio" value="yes" id="recommend" name="rec" onChange={handleRecommend} defaultChecked />
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
              />
            ))}
          </fieldset>
        </div>

        <div className="error" id="empty-characteristics">
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
            <textarea value={body} onChange={handleBody} minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" rows="10" cols="60" />
          </div>
          {remainingChars}
          <div className="error" id="empty-body">
            <small>This field is required</small>
          </div>
          <div className="error" id="short-body">
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
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
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
            <input type="text" value={name} onChange={handleNameChange} maxLength="60" placeholder="Example: jackson11!" size="60" />
          </div>
          <small className="privacy-warning">For privacy reasons, do not use your full name or email address</small>
          <div className="error" id="empty-name">
            <small>This field is required</small>
          </div>
        </div>

        <div className="review-section">
          Your email (mandatory)
          <div className="text-input">
            <input type="text" value={email} onChange={handleEmailChange} maxLength="60" placeholder="Example: jackson11@email.com" size="60" />
          </div>
          <div className="error" id="empty-email">
            <small>This field is required</small>
          </div>
          <div className="error" id="invalid-email">
            <small>Invalid email</small>
          </div>
        </div>
        <button className="submit-button submit-review" type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default NewReview;
