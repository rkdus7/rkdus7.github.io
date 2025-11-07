// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: 'SNS BANNER Project 1',
    image: 'img/portfolio/p1.jpg',
    description: '이 프로젝트는 프로모션 배너 디자인입니다. 브랜드의 메세지를 효과적으로 전달하면서도, 시각적으로 완성도 높은 디자인으로 홍보 효과를 극대화 했습니다.'
  },
  project2: {
    title: 'PACKAGE DESIGN Project 2',
    image: 'img/portfolio/pack.jpg',
    description: '애사비 스틱 패키지 디자인으로 간결하면서도 모던한 느낌과 컬러로 브랜드의 이미지를 강조했습니다.'
  },
  project3: {
    title: 'EDETAIL PAGE Project 3',
    image: 'img/portfolio/name2.png',
    description: '아몬드 브리즈의 산뜻하고 건강한 이미지를 담아, 가볍게 즐길 수 있는 브랜드 감성을 표현한 상세페이지 디자인입니다.'
  },
  project4: {
    title: 'LEAFLET DESIGN Project 4',
    image: 'img/portfolio/p4.jpg',
    description: '클래식 공연의 품격과 예술적 감성을 담아 세련된 분위기로 완성한 리프렛 디자인입니다.'
  },
  project5: {
    title: 'BROCHURE DESIGN Project 5',
    image: 'img/portfolio/p5.jpg', 
    description: '인천공항의 공간과 서비스를 감각적으로 담아, 세련된 잡지형 구성으로 완성한 브로슈어 디자인입니다.'
  },
  project6: {
    title: 'POSTER DESIGN Project 6',
    image: 'img/portfolio/p6.jpg',
    description: '봄의 따스한 감성과 설렘을 담아, 벚꽃 축제의 분위기를 감각적으로 표현한 포스터 디자인입니다.'
  }
};

// 모달 열기 함수
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 모달 외부 클릭시 닫기
function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});