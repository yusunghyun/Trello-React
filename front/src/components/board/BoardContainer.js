//Board에 메인 컨테이너. 보드와 관련된 컴포넌트는 모두 여기서 시작된다.
import React from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CommonCss from '../../css/CommonCss';
import BoardItem from './BoardItem'
import ListContainer from './ListContainer'

const useStyles = makeStyles({
  board: CommonCss.commonContainerCss
})

//board를 가져오는 ajax. 서버 개발전 까지 하드 코딩 데이터로 대체
const boardData = [
  {board1: {title: 'board1', boardKey: 1, boardId: 1}},
  {board2: {title: 'board2', boardKey: 2, boardId: 2}},
  {board3: {title: 'board3', boardKey: 3, boardId: 3}},
  {board4: {title: 'board4', boardKey: 4, boardId: 4}}
];

/**
 * 페이지 용도
 *  - 처음 시작 됐을 때 화면
 */
const BoardContainer = () => {
  const classes = useStyles();
  
  //유저의 board 데이터를 관리하는 state
  let [board, setBoard] = React.useState([]);

  React.useEffect(() => {
    //board data를 가져오는 ajax. 서버 개발 후 로직 작성
    // let boardData = () => {
  
    // }

    setBoard(boardData);
  })
  
  return (
    <div className={[classes.board].join(' ')}>
      {/*board의 기본 경로*/}

        {
          board.map((v, i)=>(
            <BoardItem key={v.title} index={i}/>
          ))
        }
      {/*리스트 Container 경로*/}
    </div>
  );
};

export default BoardContainer;