import React, {useState, useEffect} from 'react';

import InputText from '../../Component/InputText/Input.js';
import Button from '../../Component/Button/ButtonAction.js';
import Result from '../../Component/Results/Result.js';

import './Body.scss';

import {ReactComponent as ChuckNorrisIcon} from 'assets/chucknorris.svg';

const axios = require ('axios');

export default function Body () {
  const [randomJoke, setRandomJoke] = useState ([]);
  const [searchValue, setSearchValue] = useState ('');
  const [categoryValue, setCategoryValue] = useState ('');
  const [categoryList, setCategoryList] = useState ([]);
  const [SuggestionCategory, setSuggestionCategory] = useState ([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect (() => {
    axios.get ('https://api.chucknorris.io/jokes/random').then (res => {
      const datas = [];
      const value = res.data.value;
      datas.push (value);
      setRandomJoke (datas);
    });
  }, []);

  useEffect (() => {
    axios.get ('https://api.chucknorris.io/jokes/categories').then (res => {
      setCategoryList (res.data);
    });
  }, []);

  const getSearchValue = e => {
    setSearchValue (e.target.value);
  };

  const getCategoryValue = e => {
    setCategoryValue (e.target.value);
    let possibleCategory = categoryList.filter (text =>
      text.includes (categoryValue)
    );
    setSuggestionCategory (possibleCategory);
  };

  const getRandomJoke = () => {
    axios.get ('https://api.chucknorris.io/jokes/random').then (res => {
      const datas = [];
      const value = res.data.value;
      datas.push (value);
      setRandomJoke (datas);
    });
  };

  const showSuggestionCategory = SuggestionCategory.map ((text, index) => {
    return (
      <ul
        onClick={() => {
          setCategoryValue (text);
          setSuggestionCategory ([]);
        }}
        key={`category-${index}`}
      >
        {text}
      </ul>
    );
  });

  return (
    <section>
      <div className="input-wrapper">
        <InputText
          className={['search-input']}
          placeholder="Search jokes by text"
          searchVal={getSearchValue}
        />
        <Button
          text="Search!"
          width="91px"
          href={{
            pathname: `/search/${searchValue}`,
            state: {
              isSearchCategory: false,
              search: searchValue,
              sign: 'Search Text:',
            },
          }}
        />
      </div>
      <div className="icon-wrapper">
        <ChuckNorrisIcon className="cn-icon" />
      </div>
      <Result text={randomJoke} className={['random-result']} />
      <div className="random-button">
        <Button onClick={getRandomJoke} text="Another!" width="103px" />
      </div>
      <div className="list-of-category">
        {SuggestionCategory && showSuggestionCategory}
      </div>
      <div className="input-wrapper category">
        <InputText
          className={['search-input']}
          placeholder="Search jokes by category"
          categoryVal={getCategoryValue}
          value={categoryValue}
        />
        <Button
          href={{
            pathname: `/category/${categoryValue}`,
            state: {
              isSearchCategory: true,
              category: categoryValue,
              sign: 'Category:',
            },
          }}
          text="Search!"
          width="91px"
        />
      </div>
    </section>
  );
}
