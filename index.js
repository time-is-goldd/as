document.addEventListener('DOMContentLoaded', function() {
    // 모달 요소들 가져오기
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-content');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    // 현재 표시 중인 이미지 인덱스를 추적하기 위한 변수
    let currentIndex = 0;
    
    // 각 갤러리 이미지에 클릭 이벤트 추가
    galleryItems.forEach(function(item, index) {
        item.addEventListener('click', function() {
            currentIndex = index; // 클릭한 이미지의 인덱스 저장
            modal.style.display = 'flex'; // 모달 표시
            modalImg.src = this.src; // 클릭한 이미지 소스를 모달 이미지에 설정
        });
    });
    
    // 이전 이미지로 이동
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        modalImg.src = galleryItems[currentIndex].src;
    });
    
    // 다음 이미지로 이동
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        modalImg.src = galleryItems[currentIndex].src;
    });
    
    // 닫기 버튼 클릭 시 모달 닫기
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // 모달 바깥 영역 클릭 시 모달 닫기
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // ESC 키 누르면 모달 닫기
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" || event.key === "Esc") {
            modal.style.display = 'none';
        }
        // 왼쪽 화살표 키로 이전 이미지
        else if (event.key === "ArrowLeft") {
            prevBtn.click();
        }
        // 오른쪽 화살표 키로 다음 이미지
        else if (event.key === "ArrowRight") {
            nextBtn.click();
        }
    });
});


    document.addEventListener('DOMContentLoaded', function() {
        // 모든 앵커 링크에 부드러운 스크롤 효과 적용
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
