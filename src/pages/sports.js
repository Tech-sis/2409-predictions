import React from 'react'
import { Card } from 'antd'
// import Countries from './countries'
import { Anchor } from 'antd'
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
import NavHeader from '../components/Header'

const { Link } = Anchor
const gridStyle = {
  width: '19%',
  textAlign: 'center',
  height: '100px',
  color: '#fff',
  border: '5px solid #fff',
  borderRadius: '10px',
  margin: '5px',
}

const Sports = () => {
  return (
    <>
      <NavHeader />
      <div className={styles.container}>
        <Card
          style={{
            backgroundColor: '#001E8B',
            margin: '70px 132px',
            padding: '25px',
            width: '80%',
          }}
          bodyStyle={{ margin: '20px 30px 0' }}
          size="small"
          className={styles.card}
        >
          <Anchor affix={false}>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={soccer}
                alt="soccer"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/countries" title="Soccer" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={basketball}
                alt="basketball"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Basketball" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={americanFootball}
                alt="american football"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="American football" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={volley}
                alt="volley"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Volley ball" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={tennis}
                alt="tennis"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Tennis" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={boxing}
                alt="boxing"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Boxing" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={bowling}
                alt="bowling"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Bowling" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={icehockey}
                alt="icehockey"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Ice Hockey" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={badminton}
                alt="badminton"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Badminton" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={snooker}
                alt="snooker"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Snooker" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={cricket}
                alt="cricket"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Cricket" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={golf}
                alt="golf"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Golf" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={baseball}
                alt="baseball"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Baseball" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={aussie}
                alt="aussie"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Aussie Rules" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={rugby}
                alt="rugby"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Rugby" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={darts}
                alt="darts"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Darts" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={chess}
                alt="chess"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Chess" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={swimming}
                alt="swimming"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Swimming" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={olympic}
                alt="olympic"
                style={{ display: 'block', margin: '5px auto' }}
                className={styles.cardImg}
              />
              <Link href="/" title="Olympic" />
            </Card.Grid>
            <Card.Grid style={gridStyle} className={styles.cardGrid}>
              <img
                src={cycling}
                alt="cycling"
                style={{
                  display: 'block',
                  margin: '5px auto',
                  // color: 'white',
                }}
                className={styles.cardImg}
              />
              <Link href="/" title="Cycling" />
            </Card.Grid>
          </Anchor>
        </Card>
      </div>
    </>
  )
}

export default Sports
