import { AagModal } from '../../components';
import { useState, useContext } from 'react';
import { AagButton } from '../../components/shared/aagButton/AagButton';
import { ThemeContext } from '../../context';
import { useTranslation } from 'react-i18next';

interface Props {}

export const Home = (props: Props) => {
  const { darkMode } = useContext(ThemeContext);
  const [t] = useTranslation();
  const [showModal, setShowModal] = useState(true);
  const onSuccess = () => {
    setShowModal(false);
  };
  return (
    <>
      <AagButton
        label="Mostrar modal"
        onClick={() => setShowModal(true)}
        styleContainer={{ padding: '10px' }}
      />
      <AagModal
        darkTheme={darkMode}
        onCancel={() => setShowModal(false)}
        onSuccess={onSuccess}
        show={showModal}
        showCancelButton={true}
        showSuccessButton={true}
        textCancel={t('home.Cancel')}
        textModal="Ad proident deserunt quis duis officia ad. Exercitation excepteur deserunt adipisicing dolor voluptate dolor ullamco officia velit consectetur incididunt dolor. Labore laboris aute laborum consectetur nostrud quis deserunt aute ullamco Lorem magna deserunt officia ea. Sint ipsum consectetur minim commodo. Laboris irure cillum occaecat dolor ad voluptate commodo adipisicing deserunt veniam minim ex. Culpa ipsum exercitation reprehenderit incididunt aute exercitation eu incididunt officia."
        textSuccess={t('home.Confirm')}
      />
    </>
  );
};
