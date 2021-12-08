import React from 'react'
import { Button, Card } from 'antd'
import { Link } from 'react-router-dom'
import styles from '../styles/sports.module.css'
import soccer from '../assets/soccer.svg'
import basketball from '../assets/basketball.svg'
import americanFootball from '../assets/american-football.svg'
import baseball from '../assets/baseball.svg'
import badminton from '../assets/badminton.svg'
import bowling from '../assets/bowling.svg'
import boxing from '../assets/boxing.svg'
import chess from '../assets/chess.svg'
import cricket from '../assets/cricket.svg'
import darts from '../assets/darts.svg'
import golf from '../assets/golf.svg'
import icehockey from '../assets/icehockey.svg'
import rugby from '../assets/rugby.svg'
import snooker from '../assets/snooker.svg'
import swimming from '../assets/swimming.svg'
import tennis from '../assets/tennis.svg'
import volley from '../assets/volley.svg'
import cycling from '../assets/cycling.svg'
import aussie from '../assets/aussie.svg'
import olympic from '../assets/olympic.svg'
import NavHeader from '../components/header'

const gridStyle = {
  width: '19%',
  textAlign: 'center',
  height: '100px',
  color: '#fff',
  border: '5px solid #fff',
  borderRadius: '10px',
  margin: '5px',
  //   padding: '5px',
}

const Sports = () => {
  return (
    <>
      <NavHeader />
      <div className={styles.container}>
        <Card
          style={{
            backgroundColor: 'black',
            margin: '70px 132px',
            padding: '25px',
            width: '80%',
          }}
          bodyStyle={{ margin: '20px 30px' }}
          size="small"
        >
          <Card.Grid style={gridStyle}>
            <Link to="">
              <img
                src={soccer}
                alt="soccer"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Soccer
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={basketball}
                alt="basketball"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Basketball
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={americanFootball}
                alt="american football"
                style={{ display: 'block', margin: '5px auto' }}
              />
              American Football
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={volley}
                alt="volley"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Volley ball
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={tennis}
                alt="tennis"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Tennis
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={boxing}
                alt="boxing"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Boxing
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={bowling}
                alt="bowling"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Bowling
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="">
              <img
                src={icehockey}
                alt="icehockey"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Ice Hockey
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={badminton}
                alt="badminton"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Badminton
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={snooker}
                alt="snooker"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Snooker
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={cricket}
                alt="cricket"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Cricket
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={golf}
                alt="golf"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Golf
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={baseball}
                alt="baseball"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Baseball
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={aussie}
                alt="aussie"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Aussie Rules
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="">
              <img
                src={rugby}
                alt="rugby"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Rugby
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={darts}
                alt="darts"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Darts
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={chess}
                alt="chess"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Chess
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={swimming}
                alt="swimming"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Swimming
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={olympic}
                alt="olympic"
                style={{ display: 'block', margin: '5px auto' }}
              />
              Olympic
            </Link>
          </Card.Grid>
          <Card.Grid style={gridStyle}>
            <Link to="/">
              <img
                src={cycling}
                alt="cycling"
                style={{ display: 'block', margin: '5px auto', color: 'white' }}
              />
              Cycling
            </Link>
          </Card.Grid>
        </Card>
      </div>
    </>
  )
}

export default Sports
