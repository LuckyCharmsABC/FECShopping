import React, { useState } from 'react';
import _ from 'underscore';
import axios from 'axios';
import Characteristic from './Characteristic.jsx';

const NewReview = ({ data, qualities }) => {
  const [firstStar, setFirstStar] = useState('⭐');
  const [secondStar, setSecondStar] = useState('⭐');
  const [thirdStar, setThirdStar] = useState('⭐');
  const [fourthStar, setFourthStar] = useState('⭐');
  const [fifthStar, setFifthStar] = useState('⭐');
  const [rating, setRating] = useState(null);
  const [recommend, setRecommend] = useState(true);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [remainingChars, setRemainingChars] = useState('Minimum required characters left: 50');
  // eslint-disable-next-line no-array-constructor
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
        console.log('Done! Here is the image info: ', res.info);
        const photo = res.info.secure_url;
        setPhotos([...photos, photo]);
        console.log(photos);
      }
    },
  );

  const oneStar = () => {
    setFirstStar('🌟');
    setSecondStar('⭐');
    setThirdStar('⭐');
    setFourthStar('⭐');
    setFifthStar('⭐');
    setRating(1);
    document.getElementById('empty-review').style.display = 'none';
  };

  const twoStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('⭐');
    setFourthStar('⭐');
    setFifthStar('⭐');
    setRating(2);
    document.getElementById('empty-review').style.display = 'none';
  };

  const threeStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('🌟');
    setFourthStar('⭐');
    setFifthStar('⭐');
    setRating(3);
    document.getElementById('empty-review').style.display = 'none';
  };

  const fourStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('🌟');
    setFourthStar('🌟');
    setFifthStar('⭐');
    setRating(4);
    document.getElementById('empty-review').style.display = 'none';
  };

  const fiveStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('🌟');
    setFourthStar('🌟');
    setFifthStar('🌟');
    setRating(5);
    document.getElementById('empty-review').style.display = 'none';
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

    setFirstStar('⭐');
    setSecondStar('⭐');
    setThirdStar('⭐');
    setFourthStar('⭐');
    setFifthStar('⭐');
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

  return (
    <div id="new-review">
      <button type="button" onClick={exitNewReview}>x</button>
      <form>
        <div>
          Overall rating (mandatory)
        </div>

        <div>
          <button type="button" onClick={oneStar}>
            {firstStar}
          </button>
          <button type="button" onClick={twoStar}>
            {secondStar}
          </button>
          <button type="button" onClick={threeStar}>
            {thirdStar}
          </button>
          <button type="button" onClick={fourStar}>
            {fourthStar}
          </button>
          <button type="button" onClick={fiveStar}>
            {fifthStar}
          </button>
          {ratings[rating]}
        </div>

        <div className="error" id="empty-review">
          <small>This field is required</small>
        </div>

        <div>
          Do you recommend this product? (mandatory)
          <fieldset>
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

        <div>
          Characteristics (mandatory)
          <fieldset>
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

        <div>
          Review Summary
        </div>

        <div>
          <input type="text" value={summary} onChange={handleSummary} maxLength="60" placeholder="Example: Best purchase ever!" size="60" />
        </div>

        <div>
          Review body (mandatory)
        </div>

        <div>
          <textarea value={body} onChange={handleBody} minLength="50" maxLength="1000" placeholder="Why did you like the product or not?" rows="10" cols="60" />
        </div>

        <div>
          {remainingChars}
        </div>

        <div className="error" id="empty-body">
          <small>This field is required</small>
        </div>
        <div className="error" id="short-body">
          <small>Body must be at least 50 characters long</small>
        </div>

        <div>
          Upload your photos
        </div>

        <div>
          <button type="button" onClick={handleAddImage}>
            Upload files
          </button>
        </div>

        <div>
          {_.map(photos, (url) => (
            <img src={url} alt="" key={url} width="200px" />
          ))}
        </div>

        <div>
          What is your name (mandatory)
        </div>

        <div>
          <input type="text" value={name} onChange={handleNameChange} maxLength="60" placeholder="Example: jackson11!" size="60" />
        </div>

        <small>For privacy reasons, do not use your full name or email address</small>

        <div className="error" id="empty-name">
          <small>This field is required</small>
        </div>

        <div>
          Your email (mandatory)
        </div>

        <div>
          <input type="text" value={email} onChange={handleEmailChange} maxLength="60" placeholder="Example: jackson11@email.com" size="60" />
        </div>

        <div className="error" id="empty-email">
          <small>This field is required</small>
        </div>
        <div className="error" id="invalid-email">
          <small>Invalid email</small>
        </div>

        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default NewReview;
