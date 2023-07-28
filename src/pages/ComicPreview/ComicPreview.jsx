import Error from '@/components/Error';
import Loading from '@/components/Loading';
import useFetch from '@/hooks/useFetch';
import { getMarvelComicById } from '@/services';
import {
  BackArrowButtonStyled,
  ComicCreatorsContainerStyled,
  ComicPrevContainerStyled,
  ComicPrevH2Styled,
  ComicPrevImgStyled,
  ComicPrevInfoContainerStyled,
  ComicPrevInfoDetailContainerStyled,
  ComicPrevParagraphStyled,
} from '@/styled-components/comicPreview.styled.components';
import {
  H1Styled,
  ParagraphStyled,
} from '@/styled-components/general.styled.components';
import { MainStyled } from '@/styled-components/layout.styled.components';
import { getFirstResults } from '@/utils/constants';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ComicPreview = () => {
  const [comicData, setComicData] = useState(null);

  const [imageLoaded, setImageLoaded] = useState(false);

  const { comicId } = useParams();

  const navigate = useNavigate();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const { data, loading, error } = useFetch(getMarvelComicById(comicId), [
    comicId,
  ]);

  const comic = getFirstResults(data);

  useEffect(() => {
    if (data) {
      try {
        setComicData(comic);
      } catch (e) {
        console.log('e');
      }
    }
  }, [data]);

  if (loading) {
    return (
      <MainStyled>
        <Loading />;
      </MainStyled>
    );
  }

  if (error) {
    return (
      <MainStyled>
        <Error error={'Comic not found.'} />;
      </MainStyled>
    );
  }

  return (
    <MainStyled>
      {comicData ? (
        <ComicPrevContainerStyled>
          <BackArrowButtonStyled onClick={() => navigate(-1)}>
            <ion-icon name='arrow-back-outline'></ion-icon>
          </BackArrowButtonStyled>
          <ComicPrevInfoContainerStyled>
            <ComicPrevImgStyled
              loading='lazy'
              src={`${comicData.thumbnail.path}/portrait_uncanny.${comicData.thumbnail.extension}`}
              alt={`${comicData.title}.img`}
              onLoad={handleImageLoad}
            />
            {imageLoaded && (
              <ComicPrevInfoDetailContainerStyled>
                <H1Styled>{comicData.title}</H1Styled>
                <ComicCreatorsContainerStyled>
                  {comicData.creators.items.length > 0 &&
                    comicData.creators.items.map(creator => (
                      <ComicPrevH2Styled key={creator.name}>
                        {`${creator.role}: `}
                        <ComicPrevParagraphStyled>{`${creator.name}`}</ComicPrevParagraphStyled>
                      </ComicPrevH2Styled>
                    ))}
                </ComicCreatorsContainerStyled>
                <ComicPrevParagraphStyled>
                  {comicData.description ||
                    comicData.variantDescription ||
                    'No description available.'}
                </ComicPrevParagraphStyled>
              </ComicPrevInfoDetailContainerStyled>
            )}
          </ComicPrevInfoContainerStyled>
        </ComicPrevContainerStyled>
      ) : (
        <ParagraphStyled>{error}</ParagraphStyled>
      )}
    </MainStyled>
  );
};

export default ComicPreview;
