import { CharactersContext, SearchContext } from '@/context';
import { getCharacterComic, getCharacterComicsInParams } from '@/services';
import {
  ButtonCardStyled,
  FigcaptionStyled,
  FigureImgStyled,
  FigureStyled,
  TitleCardStyled,
} from '@/styled-components/card.styled.components';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import Modal from '../Modal';
import { getComicList } from '@/utils/constants';

const Character = ({ character }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [blur, setBlur] = useState(false);
  const [hover, setHover] = useState(true);

  const { hasParams } = useContext(SearchContext);
  const { updateComics, updateFavCharacters, isInFavorites } =
    useContext(CharactersContext);

  const comicsInParams = getComicList(character);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const props = {
    isOpen,
    handleClose,
    character,
    error,
    isLoading,
  };

  const handleOpen = async () => {
    const fetchData = async () => {
      const response = await getCharacterComicsInParams(comicsInParams);
      await Promise.all(response).then(response => {
        const results = response.flat();
        updateComics(results);
      });
    };
    setBlur(true);
    setHover(false);
    setIsLoading(true);
    setError('Comics not found.');
    try {
      if (hasParams) {
        await fetchData();
      } else {
        const response = await fetch(getCharacterComic(character.id));
        if (!response.ok) throw new Error(`Error! status: ${response.status}`);
        const result = await response.json();
        updateComics(result);
      }
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
      setBlur(false);
      setHover(true);
      setIsOpen(true);
    }
  };

  return (
    <>
      <FigureStyled onClick={() => handleOpen()} $hover={hover}>
        <FigureImgStyled
          $blur={blur}
          loading='lazy'
          src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
          alt={`${character.name}.img`}
          onLoad={handleImageLoad}
        />
        {imageLoaded && (
          <>
            <ButtonCardStyled
              $inputColor={isInFavorites(character.id)}
              onClick={e => {
                e.stopPropagation();
                updateFavCharacters(character);
              }}
            >
              <ion-icon name='star' />
            </ButtonCardStyled>
            <FigcaptionStyled>
              <TitleCardStyled>{character.name}</TitleCardStyled>
            </FigcaptionStyled>
          </>
        )}
      </FigureStyled>
      <Modal props={props} />
    </>
  );
};

Character.propTypes = {
  character: PropTypes.object,
};

export default Character;
