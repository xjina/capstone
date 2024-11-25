import React from 'react';
import './timetablelist.css';
import Layout from "../Layout/Layout";
import { useNavigate } from 'react-router-dom';

const TimetableList = () => {
  const days = ['월', '화', '수', '목', '금', '토'];
  const timeSlots = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  
  const timetableData1 = [
    { day: '화', time: 9, title: "프로그래밍언어론", room: "공3017" },
    // ...더미 데이터
  ];

  const timetableData2 = [
    { day: '월', time: 9, title: "데이터베이스", room: "공2010" },
    // ...더미 데이터
  ];

  const timetableData3 = [
    { day: '금', time: 9, title: "컴퓨터네트워크", room: "공1402" },
    // ...더미 데이터
  ];

  const navigate = useNavigate();
  const handleTimetableClick = (timetableData) => {
    navigate('/timetableview', { state: { timetableData } });
  };

  const labels = ["시간표 1 선택하기", "시간표 2 선택하기", "시간표 3 선택하기"];
  const timetableData = [timetableData1, timetableData2, timetableData3];

  return (
      <div className="timetablelist-container">
        <h2 className="timetablelist-title">원하는 시간표를 선택해 주세요!</h2>
        <div className="timetablelist-options">
          {labels.map((label, idx) => (
            <React.Fragment key={idx}>
              <div className="timetablelist-option-wrapper">
                <button
                  className="timetablelist-button"
                  onClick={() => handleTimetableClick(timetableData[idx])}
                >
                  {label}
                </button>
                <div className="timetablelist-option">
                  <div className="timetablelist-content">
                    <div className="timetablelist-grid">
                      <div className="timetablelist-header"></div>
                      {days.map((day, index) => (
                        <div key={index} className="timetablelist-header">{day}</div>
                      ))}
                      {timeSlots.map((time) => (
                        <React.Fragment key={`time-${time}`}>
                          <div className="timetablelist-time-slot">{time}</div>
                          {days.map((day) => {
                            const classData = timetableData[idx].find(
                              (classItem) => classItem.day === day && classItem.time === time
                            );
                            return classData ? (
                              <div key={`${day}-${time}`} className="timetablelist-class-cell">
                                <span>{classData.title}</span>
                                <span>{classData.room}</span>
                              </div>
                            ) : (
                              <div key={`${day}-${time}`} className="timetablelist-time-slot"></div>
                            );
                          })}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {idx < labels.length - 1 && <div className="timetablelist-divider"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
  );
};

export default TimetableList;