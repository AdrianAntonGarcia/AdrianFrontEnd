import cardsStyles from './cards.module.scss';
import {
  IoEyeOutline,
  IoChatbubbleOutline,
  IoCashOutline,
  IoCartOutline,
} from 'react-icons/io5';
export const Cards = () => {
  return (
    <div className={cardsStyles.cardBox}>
      <div className={cardsStyles.card}>
        <div>
          <div className={cardsStyles.numbers}>1,566</div>
          <div className={cardsStyles.cardName}>Daily views</div>
        </div>
        <div className={cardsStyles.iconBx}>
          <IoEyeOutline />
        </div>
      </div>
      <div className={cardsStyles.card}>
        <div>
          <div className={cardsStyles.numbers}>80</div>
          <div className={cardsStyles.cardName}>Sales</div>
        </div>
        <div className={cardsStyles.iconBx}>
          <IoCartOutline />
        </div>
      </div>
      <div className={cardsStyles.card}>
        <div>
          <div className={cardsStyles.numbers}>286</div>
          <div className={cardsStyles.cardName}>Comments</div>
        </div>
        <div className={cardsStyles.iconBx}>
          <IoChatbubbleOutline />
        </div>
      </div>
      <div className={cardsStyles.card}>
        <div>
          <div className={cardsStyles.numbers}>7,324</div>
          <div className={cardsStyles.cardName}>Earnings</div>
        </div>
        <div className={cardsStyles.iconBx}>
          <IoCashOutline />
        </div>
      </div>
      <div className={cardsStyles.card}>
        <div>
          <div className={cardsStyles.numbers}>80</div>
          <div className={cardsStyles.cardName}>Sales</div>
        </div>
        <div className={cardsStyles.iconBx}>
          <IoCartOutline />
        </div>
      </div>
      <div className={cardsStyles.card}>
        <div>
          <div className={cardsStyles.numbers}>80</div>
          <div className={cardsStyles.cardName}>Sales</div>
        </div>
        <div className={cardsStyles.iconBx}>
          <IoCartOutline />
        </div>
      </div>
    </div>
  );
};
