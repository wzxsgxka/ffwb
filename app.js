document.addEventListener('DOMContentLoaded', function () {
    const players = [
        { name: '一诺', position: '发育路', team: 'AG超玩会', heroes: ['公孙离', '孙尚香'] },
        { name: 'Fly', position: '对抗路', team: '济南RW侠', heroes: ['花木兰', '马超'] },
        { name: '暖阳', position: '打野', team: '北京WB', heroes: ['镜', '澜'] },
        { name: '小胖', position: '打野', team: '重庆狼队', heroes: ['裴擒虎', '露娜'] },
        { name: '清清', position: '对抗路', team: '广州TTG', heroes: ['马超', '关羽'] },
        { name: '妖刀', position: '发育路', team: '苏州KSG', heroes: ['戈娅', '公孙离'] },
        { name: '花海', position: '打野', team: '武汉eStarPro', heroes: ['澜', '娜可露露'] },
        { name: 'Cat', position: '游走', team: 'AG超玩会', heroes: ['鲁班大师', '太乙'] },
        { name: '钎城', position: '发育路', team: '深圳DYG', heroes: ['虞姬', '狄仁杰'] },
        { name: '久诚', position: '中路', team: '自由人', heroes: ['干将莫邪', '百里守约'] },
        { name: '梦泪', position: '打野', team: 'AG超玩会', heroes: ['韩信', '李白'] },
        { name: '钟意', position: '打野', team: 'AG超玩会', heroes: ['赵怀真', '夏侯惇'] },
        { name: '轩染', position: '对抗路', team: 'AG超玩会', heroes: ['姬小满', '亚连'] },
        { name: '长生', position: '中路', team: 'AG超玩会', heroes: ['王昭君', '弈星'] },
        { name: '大帅', position: '游走', team: 'AG超玩会', heroes: ['朵莉亚', '苏烈'] },
        { name: '归期', position: '对抗路', team: '重庆狼队', heroes: ['狂铁', '亚连'] },
        { name: '向鱼', position: '中路', team: '重庆狼队', heroes: ['沈梦溪', '周瑜'] },
        { name: '一笙', position: '游走', team: '重庆狼队', heroes: ['鬼谷子', '张飞'] },
        { name: '梓墨', position: '对抗路', team: '北京WB', heroes: ['夏洛特', '姬小满'] },
        { name: '花卷', position: '中路', team: '北京WB', heroes: ['不知火舞', '西施'] },
        { name: '乔兮', position: '发育路', team: '北京WB', heroes: ['鲁班七号', '孙尚香'] },
        { name: '星宇', position: '游走', team: '北京WB', heroes: ['牛魔', '孙膑'] },
        { name: '绝意', position: '发育路', team: '武汉eStarPro', heroes: ['戈娅', '公孙离'] },
        { name: '子阳', position: '游走', team: '武汉eStarPro', heroes: ['东皇太一', '大乔'] },
        { name: '坦然', position: '对抗路', team: '武汉eStarPro', heroes: ['吕布', '蒙恬'] },
        { name: '风箫', position: '发育路', team: '广州TTG', heroes: ['戈娅', '黄忠'] },
        { name: '不然', position: '打野', team: '广州TTG', heroes: ['赵怀真', '夏侯惇'] },
        { name: '帆帆', position: '游走', team: '广州TTG', heroes: ['张飞', '太乙真人'] },
        { name: '小落', position: '对抗路', team: '杭州LGD.NBW', heroes: ['姬小满', '亚连'] },
        { name: '九尾', position: '中路', team: '广州TTG', heroes: ['不知火舞', '上官婉儿'] },
        { name: '今屿', position: '打野', team: '苏州KSG', heroes: ['镜', '澜'] },
        { name: '轻语', position: '对抗路', team: '北京JDG', heroes: ['姬小满', '狂铁'] },
        { name: '清融', position: '中路', team: '北京JDG', heroes: ['西施', '不知火舞'] },
        { name: '小义', position: '打野', team: '深圳DYG', heroes: ['澜', '镜'] },
        { name: '阿豆', position: '游走', team: '长沙TES.A', heroes: ['鲁班大师', '张飞'] },
        { name: '冰尘', position: '游走', team: '长沙TES.A', heroes: ['鬼谷子', '牛魔'] },
        { name: '蓝桉', position: '发育路', team: '长沙TES.A', heroes: ['戈娅', '公孙离'] },
        { name: '无双', position: '打野', team: '济南RW侠', heroes: ['镜', '裴擒虎'] },
        { name: '无畏', position: '打野', team: '北京JDG', heroes: ['镜', '澜'] },
        { name: '未央', position: '打野', team: '深圳DYG', heroes: ['澜', '镜'] },
    ];

    // Initialize mock data if not present
    function initializeMockData() {
        if (!localStorage.getItem('userPoints')) {
            localStorage.setItem('userPoints', JSON.stringify(12580));
        }
        if (!localStorage.getItem('dailyActivities')) {
            localStorage.setItem('dailyActivities', JSON.stringify([50, 120, 80, 200, 150, 300, 250]));
        }
        if (!localStorage.getItem('activityDistribution')) {
            localStorage.setItem('activityDistribution', JSON.stringify({ login: 35, quiz: 25, chat: 20, betting: 20 }));
        }
        if (!localStorage.getItem('globalRankings')) {
            localStorage.setItem('globalRankings', JSON.stringify([
                { name: '小明粉丝团', score: 25600 },
                { name: '一诺铁粉', score: 18200 },
                { name: '诺言守护', score: 9800 },
                { name: '梦泪战队', score: 7500 },
            ]));
        }
        if (!localStorage.getItem('dailyRankings')) {
            localStorage.setItem('dailyRankings', JSON.stringify([
                { name: '一诺粉丝', score: 120 },
                { name: '诺言守护', score: 95 },
                { name: '铁粉小张', score: 80 },
                { name: '王者之心', score: 60 },
            ]));
        }
    }
    initializeMockData();

    const navLinks = document.querySelectorAll('aside > nav > a');
    const pages = {
        '首页': document.getElementById('page-home'),
        '应援陪伴系统': document.getElementById('page-companion'),
        '赛事': document.getElementById('page-events'),
        'KPL科普': document.getElementById('page-wiki'),
    };

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageId = this.textContent;

            navLinks.forEach(nav => nav.classList.remove('active-menu'));
            this.classList.add('active-menu');

            for (const page in pages) {
                pages[page].classList.add('hidden');
            }
            pages[pageId].classList.remove('hidden');

            if (pageId === '应援陪伴系统') {
                const activeSubmenu = document.querySelector('#page-companion .active-submenu');
                if (activeSubmenu) {
                    const subPageId = activeSubmenu.textContent;
                    for (const subPage in subPages) {
                        subPages[subPage].classList.add('hidden');
                    }
                    subPages[subPageId].classList.remove('hidden');
                } else {
                    companionNavLinks[0].click();
                }
            }
        });
    });

    const companionNavLinks = document.querySelectorAll('#page-companion nav a');
    const subPages = {
        '结契': document.getElementById('subpage-bond'),
        '任务': document.getElementById('subpage-tasks'),
        '铁粉问答': document.getElementById('subpage-quiz'),
        '专属休息室': document.getElementById('subpage-lounge'),
    };

    companionNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const subPageId = this.textContent;

            companionNavLinks.forEach(nav => nav.classList.remove('active-submenu'));
            this.classList.add('active-submenu');

            for (const page in subPages) {
                subPages[page].classList.add('hidden');
            }
            subPages[subPageId].classList.remove('hidden');

            if (subPageId === '结契') {
                renderBondPage();
            }
        });
    });

    const authManager = {
        loginBtn: document.getElementById('login-btn'),
        registerBtn: document.getElementById('register-btn'),
        logoutBtn: document.getElementById('logout-btn'),
        loginModal: document.getElementById('login-modal'),
        registerModal: document.getElementById('register-modal'),
        loggedOutView: document.getElementById('logged-out-view'),
        loggedInView: document.getElementById('logged-in-view'),
        welcomeMessage: document.getElementById('welcome-message'),

        init() {
            this.loginBtn.addEventListener('click', () => this.showModal(this.loginModal));
            this.registerBtn.addEventListener('click', () => this.showModal(this.registerModal));
            this.logoutBtn.addEventListener('click', () => this.logout());

            document.getElementById('login-close').addEventListener('click', () => this.hideModal(this.loginModal));
            document.getElementById('register-close').addEventListener('click', () => this.hideModal(this.registerModal));

            document.getElementById('login-submit').addEventListener('click', () => this.handleLogin());
            document.getElementById('register-submit').addEventListener('click', () => this.handleRegister());

            this.checkLoginStatus();
        },

        showModal(modal) { modal.classList.remove('hidden'); },
        hideModal(modal) { modal.classList.add('hidden'); },

        handleRegister() {
            const username = document.getElementById('register-username').value;
            const password = document.getElementById('register-password').value;
            const errorEl = document.getElementById('register-error');

            if (!username || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
                errorEl.textContent = '密码必须至少6位，且包含字母和数字。';
                errorEl.classList.remove('hidden');
                return;
            }

            localStorage.setItem('user', JSON.stringify({ username, password }));
            alert('注册成功！');
            this.hideModal(this.registerModal);
            this.updateUIAfterLogin(username);
        },

        handleLogin() {
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            const errorEl = document.getElementById('login-error');
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                this.hideModal(this.loginModal);
                this.updateUIAfterLogin(username);
            } else {
                errorEl.textContent = '用户名或密码错误。';
                errorEl.classList.remove('hidden');
            }
        },

        logout() {
            localStorage.removeItem('user');
            this.loggedOutView.classList.remove('hidden');
            this.loggedInView.classList.add('hidden');
            renderBondPage();
        },

        updateUIAfterLogin(username) {
            this.welcomeMessage.textContent = `欢迎，${username}`;
            this.loggedOutView.classList.add('hidden');
            this.loggedInView.classList.remove('hidden');
            renderBondPage();
        },

        checkLoginStatus() {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                this.updateUIAfterLogin(storedUser.username);
            }
        }
    };
    authManager.init();

    const bgManager = {
        backgrounds: ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg'],
        currentBgIndex: 0,
        init() {
            this.currentBgIndex = parseInt(localStorage.getItem('bgIndex')) || 0;
            this.setBackground();
            document.body.addEventListener('click', (e) => {
                if (e.target.closest('button, a, input, label, .slider-arrow')) return;
                this.changeBackground();
            });
        },
        changeBackground() {
            this.currentBgIndex = (this.currentBgIndex + 1) % this.backgrounds.length;
            localStorage.setItem('bgIndex', this.currentBgIndex);
            this.setBackground();
            this.showBgToast();
        },
        setBackground() {
            document.body.style.backgroundImage = `url(${this.backgrounds[this.currentBgIndex]})`;
        },
        showBgToast() {
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-5 right-5 bg-black bg-opacity-70 text-white text-sm px-4 py-2 rounded-lg z-50';
            toast.textContent = `背景已切换 ${this.currentBgIndex + 1}/${this.backgrounds.length}`;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 2000);
        }
    };
    bgManager.init();

    const slider = document.getElementById('slider');
    if (slider) {
        const radios = slider.querySelectorAll('input[type="radio"]');
        let currentIndex = 0;
        const totalSlides = radios.length;

        function changeSlide(nextIndex) {
            radios[nextIndex].checked = true;
            currentIndex = nextIndex;
        }

        setInterval(() => {
            for (let i = 0; i < radios.length; i++) {
                if (radios[i].checked) {
                    currentIndex = i;
                    break;
                }
            }
            const nextIndex = (currentIndex + 1) % totalSlides;
            changeSlide(nextIndex);
        }, 3000);
    }

    function renderAnnouncements() {
        const announcements = [
            "【公告】一诺选手达成KPL生涯2500杀成就！",
            "【活动】参与铁粉问答，赢取选手签名照！",
            "【更新】应援陪伴系统上线，快来与你的本命选手互动！",
            "【赛报】AG超玩会 3:1 战胜狼队，取得常规赛关键一分。",
            "【预告】本周六晚8点，eStarPro 对阵 TTG，敬请期待！"
        ];
        const announcementList = document.querySelector('.animate-scroll-up');
        if (announcementList) {
            announcementList.innerHTML = announcements.map(item => `<li>${item}</li>`).join('');
            // For seamless scrolling, duplicate the content
            announcementList.innerHTML += announcementList.innerHTML;
        }
    }

    function renderBondedView(player) {
        const bondPage = document.getElementById('subpage-bond');
        const user = JSON.parse(localStorage.getItem('user'));
        const totalPoints = JSON.parse(localStorage.getItem('userPoints'));
        const bondDate = new Date(JSON.parse(localStorage.getItem('bondedPlayer'))?.bindDate || Date.now());
        const daysSinceBond = Math.floor((Date.now() - bondDate.getTime()) / (1000 * 3600 * 24));
        const bondLevel = Math.min(100, Math.floor(totalPoints / 100));

        bondPage.innerHTML = `
            <div class="flex flex-col lg:flex-row gap-8">
                <!-- Left Card -->
                <div class="w-full lg:w-2/5 bg-[#1F2937] text-white rounded-2xl shadow-lg p-6 space-y-4">
                    <div class="flex flex-col items-center">
                        <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">${player.name.slice(0, 2).toUpperCase()}</div>
                        <p class="text-xl font-bold">${player.name}</p>
                        <p class="text-sm text-gray-400">${player.position} | ${player.team}</p>
                    </div>
                    <div class="border-t border-gray-700 pt-4 space-y-3 text-sm">
                        <p><strong>用户昵称：</strong> ${user.username}</p>
                        <p><strong>当前总积分：</strong> <span class="font-bold text-lg">${totalPoints.toLocaleString()}</span></p>
                        <div>
                            <p><strong>❤️ 羁绊指数</strong></p>
                            <div class="flex items-center gap-2">
                                <div class="w-full bg-gray-700 rounded-full h-2.5">
                                    <div class="bg-blue-500 h-2.5 rounded-full" style="width: ${bondLevel}%"></div>
                                </div>
                                <span class="font-bold">${bondLevel}%</span>
                            </div>
                        </div>
                        <p><strong>结契天数：</strong> ${daysSinceBond} 天</p>
                        <div class="flex items-center gap-2"><strong>结契徽章：</strong> <span class="text-2xl badge-pulse">❤️</span></div>
                    </div>
                </div>

                <!-- Right Area -->
                <div class="w-full lg:w-3/5 space-y-8">
                    <div class="bg-[#1F2937] text-white rounded-2xl shadow-lg p-6">
                        <h3 class="font-bold mb-4">📈 本周活跃度</h3>
                        <div class="h-48"><canvas id="activityChart"></canvas></div>
                    </div>
                    <div class="bg-[#1F2937] text-white rounded-2xl shadow-lg p-6">
                        <h3 class="font-bold mb-4">🥧 活动参与比例</h3>
                        <div class="h-48"><canvas id="distributionChart"></canvas></div>
                    </div>
                    <div class="bg-[#1F2937] text-white rounded-2xl shadow-lg p-6">
                        <h3 class="font-bold mb-4">🏆 总积分排行榜</h3>
                        <ul id="global-rank-list" class="space-y-2"></ul>
                    </div>
                    <div class="bg-[#1F2937] text-white rounded-2xl shadow-lg p-6">
                        <h3 class="font-bold mb-4">⚡ 今日活跃排行榜</h3>
                        <ul id="daily-rank-list" class="space-y-2"></ul>
                    </div>
                </div>
            </div>
        `;

        renderActivityChart();
        renderDistributionChart();
        renderRankings();
    }

    function renderBondLoginPrompt() {
        const bondPage = document.getElementById('subpage-bond');
        if (!bondPage) return;

        bondPage.innerHTML = `
            <div class="bg-[#1F2937] text-white rounded-2xl shadow-lg p-8">
                <h2 class="text-2xl font-bold">结契</h2>
                <p class="text-sm text-gray-300 mt-2">登录后才能选择应援选手并查看结契数据。</p>
                <div class="mt-6 flex gap-3">
                    <button id="bond-login-action" class="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">去登录</button>
                    <button id="bond-register-action" class="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">去注册</button>
                </div>
            </div>
        `;

        const loginAction = document.getElementById('bond-login-action');
        if (loginAction) {
            loginAction.addEventListener('click', () => authManager.showModal(authManager.loginModal));
        }

        const registerAction = document.getElementById('bond-register-action');
        if (registerAction) {
            registerAction.addEventListener('click', () => authManager.showModal(authManager.registerModal));
        }
    }

    function renderBondSelectionView() {
        const bondPage = document.getElementById('subpage-bond');
        const user = JSON.parse(localStorage.getItem('user'));
        if (!bondPage) return;
        if (!user) {
            renderBondLoginPrompt();
            return;
        }

        bondPage.innerHTML = `
            <div class="text-white">
                <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
                    <div>
                        <h2 class="text-2xl font-bold">选择你的应援选手</h2>
                        <p class="text-sm text-gray-300 mt-2">首次进入请先结契一位选手，后续可在此更换。</p>
                    </div>
                    <div class="text-sm text-gray-300">共 ${players.length} 位</div>
                </div>
                <div id="bond-player-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"></div>
            </div>
        `;

        const grid = document.getElementById('bond-player-grid');
        if (!grid) return;

        grid.innerHTML = players.map((p, idx) => {
            const heroes = Array.isArray(p.heroes) ? p.heroes.join(' / ') : '';
            return `
                <div class="bg-[#1F2937] rounded-2xl shadow-lg p-5 border border-gray-700 hover:border-blue-500 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">${p.name.slice(0, 2).toUpperCase()}</div>
                        <div class="min-w-0">
                            <p class="font-bold truncate">${p.name}</p>
                            <p class="text-xs text-gray-400 truncate">${p.position} | ${p.team}</p>
                        </div>
                    </div>
                    <div class="mt-4 text-xs text-gray-300">
                        <p class="text-gray-400">常用英雄</p>
                        <p class="mt-1 break-words">${heroes}</p>
                    </div>
                    <button data-player-index="${idx}" class="bond-select-btn mt-4 w-full px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">选择结契</button>
                </div>
            `;
        }).join('');

        grid.addEventListener('click', (e) => {
            const btn = e.target.closest('.bond-select-btn');
            if (!btn) return;
            const index = Number(btn.dataset.playerIndex);
            const selected = players[index];
            if (!selected) return;
            const bondedPlayer = { ...selected, bindDate: Date.now() };
            localStorage.setItem('bondedPlayer', JSON.stringify(bondedPlayer));
            renderBondedView(bondedPlayer);
        });
    }

    function renderBondPage() {
        const user = JSON.parse(localStorage.getItem('user'));
        const bondedPlayer = JSON.parse(localStorage.getItem('bondedPlayer'));

        if (!user) {
            renderBondLoginPrompt();
            return;
        }

        if (bondedPlayer && bondedPlayer.name) {
            renderBondedView(bondedPlayer);
            return;
        }

        renderBondSelectionView();
    }

    function renderActivityChart() {
        const ctx = document.getElementById('activityChart')?.getContext('2d');
        if (!ctx) return;
        const dailyActivities = JSON.parse(localStorage.getItem('dailyActivities'));
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                datasets: [{
                    label: '本周活跃度',
                    data: dailyActivities,
                    borderColor: '#3B82F6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                scales: {
                    y: { ticks: { color: 'white' } },
                    x: { ticks: { color: 'white' } }
                },
                plugins: {
                    legend: { labels: { color: 'white' } }
                }
            }
        });
    }

    function renderDistributionChart() {
        const ctx = document.getElementById('distributionChart')?.getContext('2d');
        if (!ctx) return;
        const distribution = JSON.parse(localStorage.getItem('activityDistribution'));
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['登录', '答题', '聊天', '竞猜'],
                datasets: [{
                    data: [distribution.login, distribution.quiz, distribution.chat, distribution.betting],
                    backgroundColor: ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6']
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: 'white' } }
                }
            }
        });
    }

    function renderRankings() {
        const user = JSON.parse(localStorage.getItem('user'));
        const totalPoints = JSON.parse(localStorage.getItem('userPoints'));
        const dailyPoints = JSON.parse(localStorage.getItem('dailyActivities')).slice(-1)[0] || 0;

        // Global Ranking
        const globalRankings = JSON.parse(localStorage.getItem('globalRankings'));
        const globalRankList = document.getElementById('global-rank-list');
        let userRank = { name: `${user.username} (你)`, score: totalPoints };
        let fullGlobalRank = [...globalRankings, userRank].sort((a, b) => b.score - a.score);
        if (globalRankList) {
            globalRankList.innerHTML = fullGlobalRank.slice(0, 5).map((p, i) => `
                <li class="flex justify-between items-center p-2 rounded-lg ${p.name.includes('(你)') ? 'bg-blue-600' : 'hover:bg-gray-700'}">
                    <span>${i + 1}. ${p.name}</span>
                    <span class="font-bold">${p.score.toLocaleString()}分</span>
                </li>
            `).join('');
        }

        // Daily Ranking
        const dailyRankings = JSON.parse(localStorage.getItem('dailyRankings'));
        const dailyRankList = document.getElementById('daily-rank-list');
        let userDailyRank = { name: `${user.username} (你)`, score: dailyPoints };
        let fullDailyRank = [...dailyRankings, userDailyRank].sort((a, b) => b.score - a.score);
        if (dailyRankList) {
            dailyRankList.innerHTML = fullDailyRank.slice(0, 5).map((p, i) => `
                <li class="flex justify-between items-center p-2 rounded-lg ${p.name.includes('(你)') ? 'bg-blue-600' : 'hover:bg-gray-700'}">
                    <span>${i + 1}. ${p.name}</span>
                    <span class="font-bold">${p.score}积分</span>
                </li>
            `).join('');
        }
    }

    renderBondPage();

    // Floating announcements logic
    function renderFloatingAnnouncements() {
        const container = document.getElementById('floating-announcements');
        if (!container) return;

        const messages = [
            '用户 a**c 与选手【一诺】成功结契！',
            '恭喜用户 d**f 解锁【Fly】的专属休息室！',
            '用户 g**i 在铁粉问答中答对10题，获得100积分！',
            '用户 j**l 完成每日签到，获得20积分。',
            '用户 m**o 的总积分突破10000分，荣升为“核心铁粉”！',
            '用户 p**q 与选手【暖阳】成功结契！',
            '用户 r**s 解锁了【小胖】的专属休息室。',
            '用户 t**v 在铁粉问答中连对5题！',
            '用户 w**x 完成了“观看一场比赛”的任务。',
            '用户 y**z 的应援积分排名进入前100！',
            '用户 a**b 与选手【清清】成功结契！',
            '用户 c**d 完成了“分享主页”的周常任务。',
            '用户 e**f 在专属休息室与【妖刀】进行了互动。',
            '用户 g**h 连续签到7天，获得额外奖励！',
            '用户 i**j 的总积分突破20000分，荣升为“荣耀铁粉”！'
        ];

        container.innerHTML = `
            <h3>📢 平台动态</h3>
            <div id="announcement-list-container">
                <ul id="announcement-list">
                    ${messages.map(msg => `<li>${msg}</li>`).join('')}
                </ul>
            </div>
        `;

        const list = document.getElementById('announcement-list');
        if (list) {
            let isHovering = false;
            container.addEventListener('mouseenter', () => isHovering = true);
            container.addEventListener('mouseleave', () => isHovering = false);

            setInterval(() => {
                if (!isHovering && list.children.length > 0) {
                    const firstItem = list.children[0];
                    firstItem.style.transition = 'margin-top 0.5s ease-in-out';
                    firstItem.style.marginTop = `-${firstItem.offsetHeight}px`;

                    setTimeout(() => {
                        firstItem.style.transition = '';
                        firstItem.style.marginTop = '';
                        list.appendChild(firstItem);
                    }, 500);
                }
            }, 3000);
        }
    }
    renderFloatingAnnouncements();

    // Notification popup logic
    const notificationPopup = document.getElementById('notification-popup');
    const notificationClose = document.getElementById('notification-close');
    if (notificationPopup && notificationClose) {
        notificationClose.addEventListener('click', () => {
            notificationPopup.style.display = 'none';
        });
    }
});
