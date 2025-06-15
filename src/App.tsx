import React, { useEffect } from 'react';
import './App.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroTiltedPicture from './components/HeroTiltedPicture/HeroTiltedPicture';
import CenteredPicturePhraseText from './components/CenteredPicturePhraseText/CenteredPicturePhraseText';
import TextLeftPictureRight from './components/TextLeftPictureRight/TextLeftPictureRight';
import PictureLeftTextRight from './components/PictureLeftTextRight/PictureLeftTextRight';
import IrregularBackgroundAndText from './components/IrregularBackgroundAndText/IrregularBackgroundAndText';
import BackgroundPictureAndCenteredPicture from './components/BackgroundPictureAndCenteredPicture/BackgroundPictureAndCenteredPicture';
import ThreeCenteredPicturesAndUnderPhrase from './components/ThreeCenteredPicturesAndUnderPhrase/ThreeCenteredPicturesAndUnderPhrase';
import SixPicturesMirrored from './components/SixPicturesMirrored/SixPicturesMirrored';
import FourLandscapeBanner from './components/FourLandscapeBanner/FourLandscapeBanner';
import BackgroundPictureAndTwoPicturesWithText from './components/BackgroundPictureAndTwoPicturesWithText/BackgroundPictureAndTwoPicturesWithText';
import BannerTwoPicturesAndText from './components/BannerTwoPicturesAndText/BannerTwoPicturesAndText';
import bannerStyles from './components/FourLandscapeBanner/FourLandscapeBanner.module.scss';
import CollageGallery from './components/CollageGallery/CollageGallery';
import textStyles from './components/TextLeftPictureRight/TextLeftPictureRight.module.scss';
import phraseStyles from './components/CenteredPicturePhraseText/CenteredPicturePhraseText.module.scss';
import Footer from './components/Footer/Footer'


// Define the PictureBlock type if not already imported
type PictureBlock = {
  src: string;
  caption: string;
  alt: string;
};



const images = {
  leftTop: [
    { src: '/images/lisa_seror_recherche_du_maitre.webp', caption: 'Recherche du maitre', alt: 'Recherche du maitre' },
    { src: '/images/lisa_seror_recherche_du_maitre.webp', caption: 'Recherche du maitre', alt: 'Recherche du maitre' }
  ] as [PictureBlock, PictureBlock],
  leftBottom: {
    src: '/images/lisa_seror_lappel.webp',
    caption: "L'appel",
    alt: "L'appel"
  },
  rightTop: {
    src: '/images/lisa_seror_errance.webp',
    caption: 'Errance',
    alt: 'Errance'
  },
  rightBottom: [
    {
      src: '/images/lisa_seror_songe.webp',
      caption: 'Songe',
      alt: 'Songe'
    },
    {
      src: '/images/lisa_seror_songe.webp',
      caption: 'Songe',
      alt: 'Songe'
    }
  ] as [PictureBlock, PictureBlock],
  rightExtra: {
    src: '/images/lisa_painting_one.webp',
    caption: 'Bonus Landscape',
    alt: 'Extra'
  }
};


const bannerImages: [PictureBlock, PictureBlock, PictureBlock, PictureBlock] = [
  { src: '/images/lisa_seror_recherche_du_maitre.webp', alt: 'Recherche du maitre', caption: 'Recherche du maitre' },
  { src: '/images/lisa_seror_lappel.webp', alt: "L'appel", caption: "L'appel" },
  { src: '/images/lisa_seror_errance.webp', alt: 'Erance', caption: 'Errance' },
  { src: '/images/lisa_seror_songe.webp', alt: 'Songe', caption: 'Songe' }
];


// Define the CollageItem type
type CollageItem =
  | { id: string; type: 'image'; src: string; alt: string; hoverLabel: string, size?: 'portrait' | 'landscape' | 'square' }
  | { id: string; type: 'text'; text: string };

const collageItems: CollageItem[] = [
  { id: '1', type: 'image', src: '/images/resized_image_1.webp', alt: 'Les neurones', hoverLabel: 'Les neurones', size: 'portrait' },
  { id: '3', type: 'text', text: "Ces materiaux qui construisent mes toiles rappellent la fragilité de nos maisons" },
  { id: '2', type: 'image', src: '/images/resized_image_2.webp', alt: 'Les neurones', hoverLabel: 'Les neurones', size: 'portrait' },
  { id: '7', type: 'text', text: " Le divan, l'inconscient qui s'exprime" },
  { id: '8', type: 'image', src: '/images/resized_image_4.webp', alt: 'Les neurones', hoverLabel: 'Les neurones', size: 'square' },
  { id: '5', type: 'image', src: '/images/resized_image_3.webp', alt: 'Les neurones', hoverLabel: 'Les neurones', size: 'portrait' },
  { id: '6', type: 'image', src: '/images/resized_image_2.webp', alt: 'Les neurones', hoverLabel: 'Les neurones', size: 'portrait' },
  { id: '11', type: 'text', text: "Pigments, charbon, chaume, papier de soie..." },
  { id: '4', type: 'image', src: '/images/resized_image_1.webp', alt: 'Les neurones', hoverLabel: 'Les neurones', size: 'portrait' },
  { id: '9', type: 'image', src: '/images/resized_image_4.webp', alt: 'Les neurones', hoverLabel: 'Les neurones', size: 'landscape' },
  { id: '10', type: 'image', src: '/images/resized_image_3.webp', alt: 'Les neurones', hoverLabel: 'Les neurones', size: 'portrait' },
];

function App() {

  useEffect(() => {
    AOS.init({ once: true });
  }, []);



  return (
    <>
      <HeroTiltedPicture />
      <CenteredPicturePhraseText
        imageUrl="/images/portrait.jpg"
        imageHeight="700px"
        imageWidth="450px"
        phrase={
          <>
            "Le premier <span className={phraseStyles.highlight}>exil </span>s'est de s'exiter de sa robe"

          </>}
      />
      <TextLeftPictureRight
        title={
          <>
            La Tunisie, <span className={textStyles.highlight}>ma patrie</span> j'exprime{' '}
            ma patrie les grandes fêtes, les drapeaux, la Tunisie.
          </>
        }        //subtitle="Collection 2022"
        //description="Une exploration picturale des formes et silences. Lisa Seror dévoile une série empreinte de mystère, où matière et lumière s’entrelacent."
        imageUrl="/images/fete_a_la_ghriba_compressed.webp"
      />
      <PictureLeftTextRight
        imageUrl="/images/les_deux_moutons.webp"
        title="Nous avons un père commun, une histoire commune, donc une maison commune."
      //subtitle="Œuvre en lumière"
      //description="Cette œuvre met en valeur les contrastes subtils et l'harmonie des couleurs, caractéristiques du style unique de Lisa Seror."
      />
      <IrregularBackgroundAndText text={
        <>
          Rentrez chez vous...
        </>
      } />

      <BackgroundPictureAndTwoPicturesWithText
        backgroundImageUrl="/images/destroyed_wall_two.webp"
        leftImageUrl="/images/abstract_acrylic_texture.webp"
        rightImageUrl="/images/lisa_seror_la_fete_compressed.webp"
        title="en tant qu’être humain?"
        highlightedTitle="C'est où chez nous" />

      {/* <BackgroundPictureAndCenteredPicture
        backgroundImageUrl="/images/destroyed_wall_two.webp"
        centeredImageUrl="/images/abstract_acrylic_texture.webp"
        centeredImageAlt="Featured Art Piece"
      /> */}

      <BannerTwoPicturesAndText
        titleBelow="Trace & Trame"
        images={[
          {
            src: '/images/lisa_seror_les_robes_polished.webp',
            alt: 'Première image les robes',
          },
          {
            src: '/images/lisa_seror_les_robes_two_polished.webp',
            alt: 'Deuxième image les robes',
          }

        ]}
      />

      <ThreeCenteredPicturesAndUnderPhrase
        images={[
          {
            src: '/images/lisa_seror_picture_four.jpg',
            alt: 'Première image descriptive',
          },
          {
            src: '/images/lisa_seror_picture_two.jpg',
            alt: 'Deuxième image en valeur',
          },
          {
            src: '/images/lisa_seror_picture_three.jpg',
            alt: 'Troisième image en harmonie',
          },
        ]}

      />

      <FourLandscapeBanner
        title={
          <>
            Ces chaises qui restent obsessionnelles parce que cette question reste sans reponse...{' '}
            <br />
            <span className={bannerStyles.highlight}>Où est notre place?</span>
          </>
        }
        backgroundImage="/images/full_width_black_banner_textured.webp"
        images={bannerImages} />

      <BackgroundPictureAndCenteredPicture
        backgroundImageUrl="/images/lisa_seror_lautre_compressed.webp"
        centeredImageUrl="/images/lisa_seror_lautre_compressed.webp"
        centeredImageAlt="L'autre"
      />

      {/* <ThreePicturesTitle
        mainImage="/images/lisa_seror_recherche_du_maitre.webp"
        topTitle="Les deux moutons"
        bottomTitle="La chaise ecorchée"
        sideImageOne="/images/lisa_seror_lappel.webp"
        sideImageTwo="/images/lisa_seror_errance.webp"
        imageOnLeft={true}
        titleAboveImages={true}
        theme="dark"
      /> */}

      {/* <SixPicturesMirrored
        backgroundImage="/images/black_uneven_background_cropped.png"
        leftTop={images.leftTop}
        leftBottom={images.leftBottom}
        rightTop={images.rightTop}
        rightBottom={images.rightBottom}
      /> */}

      <IrregularBackgroundAndText />

      <CollageGallery
        title="Les neurones"
        backgroundImageUrl="/images/lisa_seror_background_textured.webp"
        items={collageItems}
      />

      {/* <FourSectionSplit
        topLeft={{
          imageUrl: '/images/lisa_painting_one.webp',
        }}
        topRight={{
          subtitle: 'Exploration artistique',
          title: 'Une vision unique',
          description: "Découvrez l'univers poétique et intense de Lisa Seror, entre rêve et matière.",
        }}
        bottomLeft={{
          subtitle: 'Carnets intimes',
          title: 'Fragments d’émotions',
          description: "Des pages jaunies, des mots couchés sur papier, une mémoire réinventée.",
        }}
        bottomRight={{
          imageUrl: '/images/lisa_painting_two.webp',
        }}
      />   */}

      <Footer />


    </>

  );

}

export default App;
