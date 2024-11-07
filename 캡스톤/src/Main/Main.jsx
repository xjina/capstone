import React, { useState } from 'react';
import './Main.css'; // 스타일 파일 임포트
import { Link } from "react-router-dom";
import { FaUnlock} from 'react-icons/fa'; // React Icons 가져오기
import { MdDriveFileRenameOutline, MdOutlineQuestionAnswer } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import Layout from '../Layout/Layout';
import Dropdown from '../Dropdown/Dropdown';


function Main() {
  const [year, setYear] = useState("1학년");
  const [semester, setSemester] = useState("2학기");
  const [department, setDepartment] = useState("컴퓨터공학과");

  // 드롭다운 변경 핸들러 정의
  const handleYearChange = (event) => setYear(event.target.value);
  const handleSemesterChange = (event) => setSemester(event.target.value);
  const handleDepartmentChange = (event) => setDepartment(event.target.value);
  const handleComplete = () => {
    // 완료 버튼 클릭 시 다음 상황
    alert(`선택된 값 - 학년: ${year}, 학기: ${semester}, 학과: ${department}`);
  };
  return (
    <Layout>
      <div className="app-header">
          <div className="app-title-container">
            <span className="app-title">앱 이름</span>
          </div>
      </div>
      <div className="partition"></div>
      <main className="main-content">
        <div className="content-section">
          <Dropdown
            label="학년"
            options={["1학년", "2학년", "3학년", "4학년"]}
            selectedOption={year}
            onChange={handleYearChange}
          />
          <Dropdown
            label="학기"
            options={["1학기", "2학기"]}
            selectedOption={semester}
            onChange={handleSemesterChange}
          />
          <Dropdown
            label="학과"
            options={["컴퓨터공학과", "도시계획학과","게임소프트웨어학과"]}
            selectedOption={department}
            onChange={handleDepartmentChange}
          />
          <button className="complete-button" onClick={handleComplete}>시간표 추천</button>
        </div>
      
      </main>
      <nav className="sidebar">
        <Link to='/'>
        <button className="nav-button">
          <FaUnlock className="nav-icon" />
          로그아웃
        </button>
        </Link>
        <Link to='/Editprofile'>
        <button className="nav-button">
          <MdDriveFileRenameOutline className="nav-icon" />
          프로필 수정
        </button>
        </Link>
        <button className="nav-button">
          <IoNewspaperOutline className="nav-icon" />
          설명
        </button>
        <Link to='/Faq'>
        <button className="nav-button">
          <MdOutlineQuestionAnswer className="nav-icon" />
          문의하기
        </button>
        </Link>
      </nav>
    </Layout>
  );
}

export default Main;
