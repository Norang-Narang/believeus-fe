import React from "react";
import Typography from "../../components/common/Typography";
import Button from "../../components/common/Button";
import styles from "./Home.module.css";
import homeP from "../../assets/icons/home_p.png";
import home_hands from "../../assets/icons/home_hands.png";
import home_ring from "../../assets/icons/home_ring.png";
import home_m from "../../assets/icons/home_message.png";

const ProfileMatching = () => {
  const matchResults = [
    { name: '홍길동', gender: '남', age: 27, workHours: '8시간', location: '서울', wage: '12,500원' },
    { name: '박철수', gender: '남', age: 32, workHours: '7시간', location: '서울', wage: '15,000원' },
    { name: '김지민', gender: '여', age: 25, workHours: '8시간', location: '서울', wage: '12,500원' },
    { name: '이영희', gender: '여', age: 29, workHours: '6시간', location: '서울', wage: '18,000원' },
    { name: '최수진', gender: '여', age: 31, workHours: '9시간', location: '서울', wage: '12,500원' },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h-b-24" className={styles.userName}>이름</Typography>
        <div className={styles.divider} />
      </div>

      <div className={styles.matchingSection}>
        <Typography variant="b-r-16" className={styles.sectionTitle}>
          가장 적합한 매칭 결과
        </Typography>

        <div className={styles.matchingCarousel}>
          <div className={styles.matchingProfiles}>
            {matchResults.map((match, index) => (
              <div key={index} className={styles.profileCard}>
                <div className={styles.profileHeader}>
                  <div className={styles.profileImage}>
                    <img src= {homeP} alt="프로필" />
                  </div>
                  <div className={styles.profileInfo}>
                    <Typography variant="b-r-16" className={styles.profileName}>
                      {match.name}({match.gender})
                    </Typography>
                    <Typography variant="b-r-16" className={styles.profileAge}>
                      {match.age}세
                    </Typography>
                  </div>
                </div>
                <div className={styles.profileDetails}>
                  <Typography variant="c-sb-12" className={styles.profileInfo}>
                    {match.workHours} 근무
                  </Typography>
                  <Typography variant="c-sb-12" className={styles.profileWage}>
                    {match.location} {match.wage}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Typography variant="b-r-16" className={styles.messageTitle}>새로온 소식</Typography>
      <div className={styles.notificationBox}>
        <div className={styles.messageNotification}>
          <div className={styles.messageIcon}>
            <img src= {home_m} alt="프로필" /> 
          </div>
          <div className={styles.messageContent}>
            <Typography variant="b-r-16" className={styles.messageTitle2}>확인하지 않은 매칭</Typography>
            <Typography variant="b-r-16" className={styles.messageCount}>N건</Typography>
          </div>
          <Button color="primary" size="small" style="contained" className = {styles.viewButton} >보러가기</Button>
        </div>
      </div>

      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <img src= {home_ring} alt="프로필" />
          </div>
          <Typography variant="c-sb-12">새로운 매칭 결과를 확인하세요!</Typography>
          <div className={styles.menuArrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className={styles.menuItem}>
          <div className={styles.menuIcon}>
            <img src= {home_hands} alt="프로필" />
          </div>
          <Typography variant="c-sb-12">승인된 조율이 있습니다.</Typography>
          <div className={styles.menuArrow}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="#5A5A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMatching;