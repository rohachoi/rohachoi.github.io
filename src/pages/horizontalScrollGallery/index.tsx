import { Global } from '@emotion/react';
import React from 'react';
import styled from '@emotion/styled';
import { GlobalStyles } from './styles/GlobalStyles';

export const HorizontalScrollGallery = () => {

  return (
    <div>
      <Global styles={GlobalStyles} />
      <h1>Horizontal Scroll Gallery</h1>
      <ul>
        <li><a href={"#"}><i className={'fa fa-facebook'}></i></a></li>
        <li><a href={"#"}><i className={'fa fa-facebook'}></i></a></li>
        <li><a href={"#"}><i className={'fa fa-facebook'}></i></a></li>
        <li><a href={"#"}><i className={'fa fa-facebook'}></i></a></li>
      </ul>
      <ul>
        <li>Artwork 01 ~ </li>
        <li>Artwork 06 ~ </li>
        <li>Artwork 11 ~ </li>
        <li>Artwork 16 ~ </li>
      </ul>
      <p>Lorem<span>Ipsum</span><br/><em>Lorem Ipsum is simply dummy text.</em></p>
      <p>2015 Seong-il, Choi All right reserved.</p>

    </div>
  );
}

const Section = styled.div`
  
  `
