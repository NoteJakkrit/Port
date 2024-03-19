import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';


function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile />

        <Title title="Jakkrit Jaroentham (Note)">
          <h3>ตำแหน่ง : Software Developer</h3>
        </Title>

        <Title title="Contact">
     
          <h4>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</h4>
          <h4>วันเกิด: {moment("2003/02/17").format("D MMM YYYY")}</h4>
          <h4>
            Tel : 0644475341
          </h4>
        
          <h4>Email : notejakkrit17@gmail.com</h4>
        </Title>
    
        <Title title="Education">
          <h4>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</h4>
          <h4>มหาวิทยาลัยราชภัฏสวนสุนันทา</h4> 
          <h4>GPA: 3.77</h4> 
        </Title>
      </div>
    
      <div className="rightPort" >
        <center>
        <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button></center>
        <div style={{ display: hide ? 'none': 'block'}}>
          <Title title="Profile" >
            <p >
            ชื่อเล่นชื่อ โน๊ต ปัจจุบันอายุ 21 ปี ศึกษาอยู่ที่มหาวิทยาลัยราชภัฏสวนสุนันทา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ โดยจะมีประสบการณ์ที่ได้รับมาจากการเรียนดังนี้ มีการสร้างเว็บไซต์และการสร้างแอพพลิเคชั่น เป็นต้นซึ่งอยากฝึกงานเกี่ยวกับ Software Developer
            </p>
          </Title>

          <Title title="Work Experience">
            <h3 style={{color:'#000'}}>
            สร้างแอพพลิเคชั่น Flutter - Dart
            </h3>
            <p style={{marginTop: '-20px', color: 'gray'}}>- เป็นประสบการณ์จากการเรียนที่มหาวิทยาลัย</p>
            <h3 style={{color:'#000'}}>
            สร้างเว็บไซต์ HTML , CSS 
            </h3>
            <p style={{marginTop: '-20px', color: 'gray'}}>- เป็นประสบการณ์จากการเรียนที่มหาวิทยาลัย</p>
            <h3 style={{color:'#000'}}>
            สร้างเว็บไซต์ WordPress
            </h3>
            <p style={{marginTop: '-20px', color: 'gray'}}>- เป็นประสบการณ์จากการเรียนที่มหาวิทยาลัย</p>
            <h3 style={{color:'#000'}}>
            ออกแบบและพัฒนาอุปกรณ์ IOT 
            </h3>
            <p style={{marginTop: '-20px', color: 'gray'}}>- เป็นประสบการณ์จากการเรียนที่มหาวิทยาลัย</p>
            
          </Title>

          <Title title="Skills">
            <p >HTML / CSS / JS</p> 
            <p >Flutter / Dart</p>
            <p >React.js</p>
            <p >Git</p>
           
          </Title>
          </div>
          
      </div>

      
    </main>
  )
}

export default App
