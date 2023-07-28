import { CharactersContext, SearchContext } from '@/context';
import {
  ErrorStyled,
  H1Styled,
  H2Styled,
} from '@/styled-components/general.styled.components';
import {
  ButtonModalStyled,
  ComicNameModalStyled,
  LiModalStyled,
  ModalContainerStyled,
  ModalContentStyled,
  ModalTitleContainerStyled,
  UlModalStyled,
} from '@/styled-components/modal.styled.components';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ props }) => {
  const { comicsList } = useContext(CharactersContext);
  const { hasParams } = useContext(SearchContext);
  const [imageLoaded, setImageLoaded] = useState(false);

  const comicsListArray = !hasParams ? comicsList.data?.results : comicsList;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {props.isOpen === true && (
        <ModalContainerStyled>
          <ModalContentStyled>
            <ModalTitleContainerStyled>
              <H1Styled>{props.character.name}</H1Styled>
              <ButtonModalStyled onClick={() => props.handleClose()}>
                <ion-icon name='close-outline' />
              </ButtonModalStyled>
            </ModalTitleContainerStyled>
            <UlModalStyled>
              {comicsListArray.length > 0 ? (
                comicsListArray.map(comic => (
                  <LiModalStyled key={comic.id}>
                    <div>
                      <img
                        loading='lazy'
                        src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
                        alt={`${comic.title}.img`}
                        onLoad={handleImageLoad}
                      />
                    </div>
                    {imageLoaded && (
                      <Link to={`/comic/${comic.id}`}>
                        <ComicNameModalStyled>
                          <H2Styled>{comic.title}</H2Styled>
                        </ComicNameModalStyled>
                      </Link>
                    )}
                  </LiModalStyled>
                ))
              ) : (
                <ErrorStyled>{props.error}</ErrorStyled>
              )}
            </UlModalStyled>
          </ModalContentStyled>
        </ModalContainerStyled>
      )}
    </>
  );
};

Modal.propTypes = {
  props: PropTypes.object,
  isOpen: PropTypes.bool,
  characterComic: PropTypes.object,
  handleClose: PropTypes.func,
  character: PropTypes.object,
  error: PropTypes.string,
};

export default Modal;
