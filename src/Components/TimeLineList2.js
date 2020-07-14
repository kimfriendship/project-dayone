/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Style/TimeLineList.module.scss';
import { MainContext } from '../Context/MainContext';

const cx = classNames.bind(styles);

const TimeLineList2 = () => {
  const context = useContext(MainContext);
  const { state, patchBookmark } = context;
  const { diaries } = state;

  const onChangeBookmark = ({ target }) => {
    const id = +target.attributes.id.nodeValue;
    patchBookmark(id, target.checked);
  };

  return (
    <ul className={cx('timelineWrapper')}>
      {diaries.map((diary) => (
        <li key={diary.id} className={cx('timeline-list')}>
          <Link to={`/diaryViewer/${diary.id}`}>
            <figure>
              <img
                className={cx('thumbnail')}
                src={
                  diary.imagePaths.length
                    ? diary.imagePaths[0]
                    : 'https://user-images.githubusercontent.com/67693474/86562086-0998c900-bf9d-11ea-8a2b-66b4994e2072.png'
                }
                alt="https://user-images.githubusercontent.com/67693474/86562086-0998c900-bf9d-11ea-8a2b-66b4994e2072.png"
              />
              <figcaption>
                <div className={cx('diaryTitle')}>{diary.title}</div>
                <div className={cx('diaryDate')}>{diary.date}</div>
                <p className={cx('diaryContent')}>{diary.content}</p>
              </figcaption>
            </figure>
          </Link>
          {/* 마우스 hover시 보여지는 bookmark */}
          <input
            id={diary.id}
            type="checkbox"
            checked={diary.isBookmarked ? 'checked' : ''}
            onChange={onChangeBookmark}
          />
          <label htmlFor={diary.id}>
            <span>
              <FontAwesomeIcon
                icon={faBookmark}
                className={cx('bookmarkIcon')}
              />
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default TimeLineList2;
