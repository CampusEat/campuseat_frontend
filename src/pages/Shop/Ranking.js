import React, {useState, useEffect} from 'react';

const schools = [
  '건국대학교', '경희대학교', '고려대학교', '국민대학교', '동덕여자대학교',
  '동국대학교', '서강대학교', '서울교육대학교', '서울대학교', '서울시립대학교',
  '성균관대학교', '성신여자대학교', '세종대학교', '숙명여자대학교', '숭실대학교',
  '연세대학교', '이화여자대학교', '중앙대학교', '한국외국어대학교', '한양대학교'
]

const Minting = () =>{
  const [search, setSearch] = useState('');
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [mintingMessage, setMintingMessage] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollAnimation = () => {
    const elementsToAnimate = [
        document.querySelector('.randomNFT'),
        ...document.querySelectorAll('.Min'),
        document.querySelector('.HamburgerImage'),
        document.querySelector('.nfts')
      ];
    
      elementsToAnimate.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top + scrollPosition;
        if (elementTop < window.innerHeight) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };
    

  useEffect(() => {
    handleScrollAnimation();

    window.addEventListener('scroll', handleScrollAnimation);
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  


  //학교선택창
  const chooseSchool = (event) => {
    const newSearch = event.target.value.toLowerCase();
    setSearch(newSearch);
    const filtered = schools.filter(school => school.toLowerCase().includes(newSearch));
    setFilteredSchools(filtered);
  };

  const clickSchool = (school) => {
    setSearch(school);
    setFilteredSchools([]);
  };

  //모달관련
  const clickMinting = () => {
    if (search === '') {
      setMintingMessage('학교 선택 후에 민팅할 수 있습니다.');
    } else {
      const selectedSchool = [schools][search];
      setMintingMessage(`${search} NFT를 민팅하시겠습니까?`);
    }
    setModalOpen(true); // 모달 오픈
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const cancelModal = () => {
    setModalOpen(false);
    setSearch(''); // 선택한 학교 초기화
  };

  
  


  return (
    <div className="MintingPage">

    <h1 className='Min' style={{fontSize:"18px"}}>대학가 멤버십 서비스<br/>
        <span>캠잇</span></h1>


        <img src="/images/Minting/hamburger.svg" alt="햄버거" className="HamburgerImage" style={{marginTop:"100px", marginBottom:"100px"}}/>
        <br/><br/><br/>
        <h1 className="Min" style={{fontSize:"14px", marginBottom:"10px"}}>
            NFT 소유자 모두 <span>다른 디자인</span>의<br/>
        <span>랜덤 NFT</span>를 가질 수 있어요</h1>
        <img src="./images/Minting/nfts.svg" className='nfts' style={{width:"310px", height:"305px", marginTop:"50px"}}></img>
      <h1 className="Min" style={{marginLeft:"0px", marginTop:"200px", textAlign:"center", fontSize:"18px"}}>나만의 <span>NFT</span>를 발급하고<br/>
      <span>대학가 특별할인</span>을 받으세요</h1>


      <h1 className='Min' style={{marginTop:"80px", marginLeft:"0px", textShadow:"none", fontSize:"20px"}}><br/><br/>! 준비중입니다 !</h1>

      
      <input type="text" value={search} onChange={chooseSchool} placeholder="ex) 고려대학교" className='input'/>
      <div className="school-list">
        {filteredSchools.map((school, index) => (
          <div key={index} className="school-item" onClick={() => 
            clickSchool(school)}>{school}
          </div>
        ))}
      </div>




      <img src="/images/Minting/randomNFT.svg" className='randomNFT'></img>
      <h2 className='Question' style={{
        fontSize: "150px",
        marginBottom: "none",
        color: "#EB4F27",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.250)",
        transform: "translate(0%, -156%)" /*그림위에 글자 삽입*/        
      }}>?</h2>


    </div>
  );
  
}

export default Minting;