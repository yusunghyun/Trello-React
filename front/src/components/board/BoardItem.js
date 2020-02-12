//Board 데이터를 화면에 렌더링하는 컴포넌트
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 40
  },
  title: {
    fontSize: 14,
  },
  test: {
    backgroundColor: 'red'
  }
});

const BoardItem = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
          {props.boardId}
          {/* <Link to={"/list/"+props.boardId}></Link> */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BoardItem;