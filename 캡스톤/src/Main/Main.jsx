import React, { useState } from 'react';
import './Main.css'; // 스타일 파일 임포트
import { Link } from "react-router-dom";
import { FaUnlock } from 'react-icons/fa';
import { MdDriveFileRenameOutline, MdOutlineQuestionAnswer } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import Layout from '../Layout/Layout';
import Dropdown from '../Dropdown/Dropdown';

function Main() {
  const [year, setYear] = useState("1학년");
  const [semester, setSemester] = useState("1학기");
  const [department, setDepartment] = useState("컴퓨터공학과");
  const [majorrequired, setMajorrequired] = useState("0학점");
  const [generalCredit, setGeneralCredit] = useState("0학점");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 사이드바 상태 추가

  const handleYearChange = (event) => setYear(event.target.value);
  const handleSemesterChange = (event) => setSemester(event.target.value);
  const handleDepartmentChange = (event) => setDepartment(event.target.value);
  const handleMajorrequiredChange = (event) => setMajorrequired(event.target.value);
  const handleGeneralCreditChange = (event) => setGeneralCredit(event.target.value);

  const handleComplete = () => {
    alert(`선택된 값 - 학년: ${year}, 학기: ${semester}, 학과: ${department}, 전공학점: ${majorrequired}, 교양학점: ${generalCredit}`);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // 사이드바 열기/닫기
  };

  return (
    <Layout>
      <div className="app-header">
        <div className="app-title-container">
          <span className="app-title">시간표 자동 생성</span>
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
            options={["컴퓨터공학과", "도시계획학과", "게임소프트웨어학과"]}
            selectedOption={department}
            onChange={handleDepartmentChange}
          />
        </div>
        <div className="credit-section">
          <Dropdown
            label="전공학점"
            options={["0학점", "3학점", "6학점", "9학점"]}
            selectedOption={majorrequired}
            onChange={handleMajorrequiredChange}
          />
          <Dropdown
            label="교양학점"
            options={["0학점", "3학점", "6학점", "9학점"]}
            selectedOption={generalCredit}
            onChange={handleGeneralCreditChange}
          />
          <button className="preference-button" onClick={handleComplete}>키워드 선택</button>
        </div>
        <button className="complete-button" onClick={handleComplete}>시간표 추천</button>
      </main>
      <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
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
      <button onClick={toggleSidebar} className="toggle-sidebar-button">
      <img src="/side.png" alt="메뉴" className="side" />
      </button>
    </Layout>
  );
}

export default Main;

