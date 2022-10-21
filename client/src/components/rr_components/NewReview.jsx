import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import _ from 'underscore';

const NewReview = ({ data }) => {
  const [firstStar, setFirstStar] = useState('⭐');
  const [secondStar, setSecondStar] = useState('⭐');
  const [thirdStar, setThirdStar] = useState('⭐');
  const [fourthStar, setFourthStar] = useState('⭐');
  const [fifthStar, setFifthStar] = useState('⭐');
  const [rating, setRating] = useState(null);
  const [recommended, setRecommended] = useState(true);
  const [characteristics, setCharacteristics] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [remainingChars, setRemainingChars] = useState('Minimum required characters left: 50');
  const [images, setImages] = useState([]);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const ratings = {
    1: '- Poor',
    2: '- Fair',
    3: '- Average',
    4: '- Good',
    5: '- Great',
    null: '',
  };

  const qualities = {
    Size: ['A size too small', '½ a size too small', 'Perfect', '½ a size too large', 'A size too large'],
    Width: ['Too narrow', 'Slightly narrow', 'Perfect', 'Slightly Wide', 'Too wide'],
    Comfort: ['Uncomfortable', 'Slightly comfortable', 'Ok', 'Comfortable', 'Perfect'],
    Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
    Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
    Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs loose'],
  };

  const handleSubmit = () => {

  };

  const oneStar = () => {
    setFirstStar('🌟');
    setSecondStar('⭐');
    setThirdStar('⭐');
    setFourthStar('⭐');
    setFifthStar('⭐');
    setRating(1);
  };

  const twoStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('⭐');
    setFourthStar('⭐');
    setFifthStar('⭐');
    setRating(2);
  };

  const threeStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('🌟');
    setFourthStar('⭐');
    setFifthStar('⭐');
    setRating(3);
  };

  const fourStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('🌟');
    setFourthStar('🌟');
    setFifthStar('⭐');
    setRating(4);
  };

  const fiveStar = () => {
    setFirstStar('🌟');
    setSecondStar('🌟');
    setThirdStar('🌟');
    setFourthStar('🌟');
    setFifthStar('🌟');
    setRating(5);
  };

  const handleRecommended = () => {
    setRecommended(true);
  };

  const handleNotRecommended = () => {
    setRecommended(false);
  };

  const handleSummary = (event) => {
    setSummary(event.target.value);
  };

  const handleBody = (event) => {
    setBody(event.target.value);
    setRemainingChars(event.target.value.length < 50 ? `Minimum required characters left: ${50 - event.target.value.length}` : 'Minimum Reached');
  };

  const handleAddImage = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <div id="new-review">
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

        <div>
          Do you recommend this product? (mandatory)
          <fieldset>
            <div>
              <input type="radio" value="yes" id="recommended" name="rec" onChange={handleRecommended} defaultChecked />
              <label htmlFor="recommended">Yes</label>
            </div>

            <div>
              <input type="radio" value="no" id="not-recommended" name="rec" onChange={handleNotRecommended} />
              <label htmlFor="not-recommended">No</label>
            </div>
          </fieldset>
        </div>

        <div>
          Characteristics (mandatory)
          <fieldset>
            {_.map(data.characteristics, (char, i) => {
              const [selected, setSelected] = useState('None Selected');
              return (
                <div key={char.id}>
                  {`${i} - ${selected}`}
                  <fieldset>
                    {_.map([1, 2, 3, 4, 5], (num) => (
                      <div key={num}>
                        <input
                          type="radio"
                          name={i}
                          id={num}
                          value={num}
                          onChange={() => {
                            const characteristic = {};
                            characteristic[i] = num;
                            setCharacteristics(_.extend(characteristics, characteristic));
                            setSelected(qualities[i][num - 1]);
                          }}
                        />
                        <label htmlFor={num}>{num}</label>
                      </div>
                    ))}

                  </fieldset>
                  {`1 - ${qualities[i][0]} `}
                  {`5 - ${qualities[i][4]}`}
                </div>
              );
            })}
          </fieldset>
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

        <div>
          Upload your photos
        </div>

        <ImageUploading
          multiple
          value={images}
          maxNumber="5"
          onChange={handleAddImage}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div>
              <button
                type="button"
                style={isDragging ? { color: 'red' } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button type="button" onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index}>
                  <img src={image.data_url} alt="" width="100" />
                  <div>
                    <button type="button" onClick={() => onImageUpdate(index)}>Update</button>
                    <button type="button" onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>

        <div>
          What is your nickname (mandatory)
        </div>

        <div>
          <input type="text" value={nickname} onChange={handleNicknameChange} maxLength="60" placeholder="Example: jackson11!" size="60" />
        </div>

        <small>For privacy reasons, do not use your full name or email address</small>

        <div>
          Your email (mandatory)
        </div>

        <div>
          <input type="text" value={email} onChange={handleEmailChange} maxLength="60" placeholder="Example: jackson11@email.com" size="60" />
        </div>
      </form>
    </div>
  );
};

export default NewReview;
