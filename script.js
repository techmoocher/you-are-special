document.addEventListener('DOMContentLoaded', function() {
    // Card data - personality traits with descriptions
    const cardData = [
        {
            title: "Xin chào người đẹp!!!",
            image: "images/special.jpg",
            description: "Hellooo, về cái câu nói \"em thấy chị cũng bình thường\" đó, em rất xin lỗi. Em hong cố ý phá mood chị đâu. Đối với em chị hong hề bình thường, càng hong tầm thường. Chị là một người rất rất đặc biệt. Em xin lỗi rất nhiều vì câu đùa dỡn vô ý tứ đó của em. Em hong cố ý làm chị bùn đâu. Chúc chị một ngày vui vẻ nheeee."
        },
        {
            title: "Xinh đẹppp",
            image: "images/beautiful.jpg",
            description: "Cái này chắc chị nghe nhiều ròi. Em nói cũng hơi thừa nhưng mà chị rất xinh lun á. Hong phải là kiểu bình thường mà là nó có nét rất là riêng. Lúc chị gửi friend request ấn tượng đầu tiên của em là \"Ồ ai mà xinh dữ vậy nè\". Cảm giác như kiểu tìm thấy một viên Ngọc rất óng Ánh. Đúng nghĩa là \"Ngọc Ính rất xanhh\""
        },
        {
            title: "Dễ thươnggg",
            image: "images/cute.jpg",
            description: "Dễ thương thì phải gọi là miễn bàn. Từ giọng nói, cử chỉ, cho đến ngoại hình đều dễ thương. Suy nghĩ nữaaaa. Nói chuyện với chị mà em khám phá ra được nhiều góc nhìn cực kỳ dễ thương luôn. Đúng nghĩa you make my day. Có mấy hôm cảm thấy đúng tệ nhưng mà nhắn với chị vài câu là kiểu sạc đầy năng lượng luôn á."
        },
        {
            title: "Nụ cười của chị",
            image: "images/smile.jpg",
            description: "Nụ cười của chị rất đẹp á. Đẹp hong biết tả sao lun. Nhìn đúng cuốn lunnn. Nó kiểu dịu dàng mà nó đặc biệt á. Nhiều khi buồn buồn em vào coi profile chị mãi mà hong chán lun. Cảm ơn rất nhiều vì những tấm hình daily update của chị. Cảm thấy may mắn vì được một người đẹp như dị add locket."
        },
        {
            title: "Độ \"dỡn\"",
            image: "images/funny.jpg",
            description: "Rất rất thích chị ở điểm này lunnn. Chị luôn làm cho em cảm thấy vui khi nhắn với chị (dù em hong phải lúc nào cũng làm chị dzui 🥹). Nhiều khi em thấy joke chả có gì hay nhưng mà chị vẫn khen. Còn mấy cái hài hài trong cuộc sống của chị nữa. Cảm ơn nhìu ạaa"
        },
        {
            title: "Đầu óc sáng tạo",
            image: "images/creative.jpg",
            description: "Chị siêu siêu sáng tạo lun. Nhiều khi nghĩ ra được mấy cái mà em còn hong nghĩ đến được (theo nghĩa tích cực nhe 😁). Góc nhìn cực kỳ mở mang đầu óc lun 🤯. Nói chuyện với chị mà em học được nhiều điều mới lắm á"
        },
        {
            title: "Giỏi!!!",
            image: "images/smart.jpg",
            description: "Tròi oii hong biết khen sao cho hết lun. Cực kỳ năng nổ và cũng hong kém phần thông minh. Ăn giải thì phải gọi là như ăn cơm lun. Đối thủ chị \"beat\" như con hong đẻ. Nhìn thoy là thấy ngưỡng mộ ròi. Còn mấy cái dự án câu lạc bộ đủ thứ nữa chứ. Đỉnh quá đỉnh!!! 🤩"
        },
        {
            title: "\"Chị ong nâu nâu\"",
            image: "images/friendly.jpg",
            description: "Hế lô chiến thần ngoại giao. Lúc đầu lướt profile chị là thấy hơi bị bất ngờ ròi. Nhìn rất rất có vẻ là ngoại giao =)))). Thấy 2k mấy friends nhìn cũng hơi ngại. Tiếp xúc ròi mới thấy cách chị nói chuyện hay thiệccc. Cảm ơn vì đã hong bao giờ khiến câu chuyện của em đi vào ngõ cụt dù nhiều khi nó nhảm voãi lun."
        },
        {
            title: "Giọng hayyy!!!",
            image: "images/voice.jpg",
            description: "Lần đầu gặp chị em hơi bất ngờ là chị có giọng nói còn có mùi miền Tây. Nhưng mà nghe kỹ thấy giọng rất là hay lun. Nó rất là có chất riêng, nghe mùi đường, hơi thôn quê nhưng vẫn có nét thành thị và rất rất độc đáo. Cảm ơn rất nhiều vì đã cho em cơ hội được nghe thử nhe. Đừng tự ti vì giọng nữa nháaa chị streamer."
        },
    ];

    const loveLetter = document.getElementById('love-letter');
    const cardDeck = document.getElementById('card-deck');
    
    let currentCardIndex = 0;
    
    // Function to show the final goodbye card
    function showGoodbyeCard() {
        // Hide all current cards
        document.querySelectorAll('.card').forEach(card => {
            card.classList.remove('active');
        });

        // Create the goodbye card
        const goodbyeCard = document.createElement('div');
        goodbyeCard.classList.add('card', 'active', 'goodbye-card');
        
        goodbyeCard.innerHTML = `
            <div class="card-img-container">
                <img src="images/fav-flower.jpg" alt="Favorite Flower" class="card-img">
            </div>
            <h2 class="card-title">Đừng bùn nữa nheee</h2>
            <p class="card-text">Tặng chị bó hoa em thích nhất nè hehe. Đừng bùn nữa nhe. Chị hong có bình thường đâu. Đối với em chị rất rất đặc biệt. Một lần nữa rất xin lỗi vì câu dỡn bậy của em. Em hứa hong dỡn kiểu vậy nữa. Vui lên nhóeeee. Enjoy your day!!! 💖</p>
            <div class="navigation">
                <button class="nav-btn prev-btn">Quay lại</button>
            </div>
        `;
        
        // Apply image styling
        const imgContainer = goodbyeCard.querySelector('.card-img-container');
        imgContainer.style.width = '100%';
        imgContainer.style.maxHeight = '400px';
        imgContainer.style.overflow = 'hidden';
        imgContainer.style.borderRadius = '8px';
        imgContainer.style.marginBottom = '15px';
        imgContainer.style.display = 'flex';
        imgContainer.style.justifyContent = 'center';
        imgContainer.style.alignItems = 'center';
        
        const img = goodbyeCard.querySelector('.card-img');
        img.style.maxWidth = '100%';
        img.style.maxHeight = '400px';
        img.style.objectFit = 'contain';
        img.style.objectPosition = 'center';
        
        // Add event to adjust container height after image loads
        img.onload = function() {
            // Let container height adjust to the image's natural height
            imgContainer.style.height = 'auto';
        };

        // Add card to deck
        cardDeck.appendChild(goodbyeCard);
        
        // Add event listener to the back button
        const prevBtn = goodbyeCard.querySelector('.prev-btn');
        prevBtn.onclick = function(e) {
            e.stopPropagation();
            // Remove goodbye card
            goodbyeCard.remove();
            // Show the last regular card
            currentCardIndex = cardData.length - 1;
            updateCardVisibility();
        };
    }
    
    // Create floating petals
    function createFloatingPetals() {
        for (let i = 0; i < 20; i++) {
            createPetal();
        }
        
        // Continue creating petals at intervals
        setInterval(createPetal, 3000);
    }
    
    function createPetal() {
        const petal = document.createElement('div');
        petal.classList.add('floating-petal');
        
        // Random horizontal position
        const randomX = Math.random() * 100;
        petal.style.left = `${randomX}%`;
        
        // Random animation duration
        const randomDuration = 15 + Math.random() * 10;
        petal.style.animationDuration = `${randomDuration}s`;
        
        // Random delay
        const randomDelay = Math.random() * 10;
        petal.style.animationDelay = `${randomDelay}s`;
        
        // Random size
        const randomSize = 0.7 + Math.random() * 0.6;
        petal.style.transform = `scale(${randomSize})`;
        
        document.body.appendChild(petal);
        
        // Remove petal after animation ends
        setTimeout(() => {
            petal.remove();
        }, randomDuration * 1000 + randomDelay * 1000);
    }
    
    // Create cherry blossoms
    function createCherryBlossoms() {
        // Don't create any blossoms initially - they will be created by interval only
        
        // Create blossoms at intervals
        setInterval(createBlossom, 3000);
    }
    
    function createBlossom() {
        const blossom = document.createElement('div');
        blossom.classList.add('floating-blossom');
        
        // Random horizontal position
        const randomX = Math.random() * 100;
        blossom.style.left = `${randomX}%`;
        
        // Start from top of the page
        blossom.style.top = '-50px';
        
        // Random animation duration
        const randomDuration = 12 + Math.random() * 8;
        blossom.style.animationDuration = `${randomDuration}s`;
        
        // No delay - start immediately
        blossom.style.animationDelay = '0s';
        
        // Random size
        const randomSize = 0.8 + Math.random() * 0.7;
        blossom.style.transform = `scale(${randomSize})`;
        
        document.body.appendChild(blossom);
        
        // Remove blossom after animation ends
        setTimeout(() => {
            if (blossom.parentNode) {
                blossom.remove();
            }
        }, randomDuration * 1000);
    }

    // Create heart burst effect
    function createHeartBurst(x, y) {
        const burstContainer = document.createElement('div');
        burstContainer.className = 'heart-burst-container';
        burstContainer.style.left = x + 'px';
        burstContainer.style.top = y + 'px';
        
        for (let i = 0; i < 8; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-particle';
            const angle = (i / 8) * 360;
            heart.style.setProperty('--angle', angle + 'deg');
            burstContainer.appendChild(heart);
        }
        
        document.body.appendChild(burstContainer);
        setTimeout(() => burstContainer.remove(), 2000);
    }

    // Create cards and add to deck
    function createCards() {
        cardData.forEach((data, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            if (index === 0) card.classList.add('active');
            
            // Create card content
            card.innerHTML = `
                <div class="card-img-container">
                    <img src="${data.image}" alt="${data.title}" class="card-img">
                </div>
                <h2 class="card-title">${data.title}</h2>
                <p class="card-text">${data.description}</p>
                <div class="navigation">
                    <button class="nav-btn prev-btn">Quay lại</button>
                    <button class="nav-btn next-btn">${index === cardData.length - 1 ? 'Xem thêm' : 'Tiếp theo'}</button>
                </div>
            `;
            
            // Apply image styling
            const imgContainer = card.querySelector('.card-img-container');
            imgContainer.style.width = '100%';
            imgContainer.style.maxHeight = '400px';
            imgContainer.style.overflow = 'hidden';
            imgContainer.style.borderRadius = '8px';
            imgContainer.style.marginBottom = '15px';
            imgContainer.style.display = 'flex';
            imgContainer.style.justifyContent = 'center';
            imgContainer.style.alignItems = 'center';
            
            const img = card.querySelector('.card-img');
            img.style.maxWidth = '100%';
            img.style.maxHeight = '400px';
            img.style.objectFit = 'contain';
            img.style.objectPosition = 'center';
            
            // Add event to adjust container height after image loads
            img.onload = function() {
                // Let container height adjust to the image's natural height
                imgContainer.style.height = 'auto';
            };
            
            // Add card to deck first so it's in the DOM
            cardDeck.appendChild(card);
            
            // Now get references to the buttons and add event listeners
            const prevBtn = card.querySelector('.prev-btn');
            const nextBtn = card.querySelector('.next-btn');
            
            // Use more direct click handling
            prevBtn.onclick = function(e) {
                e.stopPropagation();
                if (currentCardIndex > 0) {
                    currentCardIndex--;
                    updateCardVisibility();
                }
            };
            
            nextBtn.onclick = function(e) {
                e.stopPropagation();
                if (index === cardData.length - 1) {
                    // Show goodbye card when last card's next button is clicked
                    showGoodbyeCard();
                } else if (currentCardIndex < cardData.length - 1) {
                    currentCardIndex++;
                    updateCardVisibility();
                }
            };
        });
    }
    
    // Update which card is visible with animation
    function updateCardVisibility() {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            
            // Make the current card active and others inactive
            if (index === currentCardIndex) {
                card.classList.add('active');
                
                // Ensure buttons on active card are explicitly clickable
                const buttons = card.querySelectorAll('.nav-btn');
                buttons.forEach(btn => {
                    btn.style.pointerEvents = 'auto';
                    btn.style.zIndex = '100';
                    btn.style.position = 'relative'; // Ensure z-index works
                    console.log('Setting button clickable:', btn);
                });
                
                // Update button visibility for the active card
                const prevBtn = card.querySelector('.prev-btn');
                
                // Set button visibility based on current card index
                if (currentCardIndex === 0) {
                    prevBtn.style.display = 'none';
                } else {
                    prevBtn.style.display = 'block';
                    prevBtn.style.opacity = '1';
                }
                
                console.log(`Active card ${index} buttons updated. Prev display: ${prevBtn.style.display}`);
            } else {
                card.classList.remove('active');
                
                // Disable pointer events on inactive cards
                card.style.pointerEvents = 'none';
            }
        });
        
        // Re-enable pointer events on the active card
        const activeCard = document.querySelector('.card.active');
        if (activeCard) {
            activeCard.style.pointerEvents = 'auto';
            console.log('Activated card pointer events');
        }
    }
    
    // Event listener for love letter click
    loveLetter.addEventListener('click', function(e) {
        // Create heart burst effect at click position
        const rect = loveLetter.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        createHeartBurst(centerX, centerY);
        
        // Add envelope open animation
        loveLetter.style.transform = 'scale(1.2) rotate(5deg)';
        loveLetter.style.transition = 'all 0.5s ease-out';
        
        setTimeout(() => {
            loveLetter.style.opacity = '0';
            loveLetter.style.transform = 'scale(0.8) rotate(-10deg)';
        }, 200);
        
        setTimeout(() => {
            loveLetter.classList.add('hidden');
            cardDeck.classList.remove('hidden');
            
            // Add dramatic entrance animation for the first card
            const firstCard = document.querySelectorAll('.card')[0];
            firstCard.style.transform = 'translateY(100px) scale(0.8) rotateX(45deg)';
            firstCard.style.opacity = '0';
            firstCard.style.transition = 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            
            setTimeout(() => {
                firstCard.classList.add('active');
                firstCard.style.transform = 'translateY(0) scale(1) rotateX(0)';
                firstCard.style.opacity = '1';
            }, 100);
        }, 600);
    });
    
    // Initialize the page
    createCards();
    createFloatingPetals();
    createCherryBlossoms();
    updateCardVisibility();
});