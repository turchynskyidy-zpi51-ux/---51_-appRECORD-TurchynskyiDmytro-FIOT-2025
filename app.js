const btns = document.querySelectorAll("button");
const sections = document.querySelectorAll(".report");
const works = document.querySelectorAll(".content")

function handClick(el) {
    el.addEventListener("click", () => {
            btns.forEach(btn => {
                btn.classList.remove('active');
            });
            sections.forEach(rep => {
                rep.classList.remove('report_active');
                if (el.id.includes(rep.id)){
                    rep.classList.add('report_active');
                    el.classList.add('active')
                    if (rep.id === 'list') {
                        fetch('./main_project/index.html')              
                        .then(r => r.text())
                        .then(text => {
                            document.querySelector('.codebox').textContent = text; 
                        })
                        .catch(() => {
                            document.querySelector('.codebox') = 'Не вдалося завантажити файл.';
                        });
                    }
                };
            });

        });
}

btns.forEach(btn => {
    if (btn.id.includes('btn')){
        handClick(btn)
    };
    if (btn.id.includes('check')){
        btn.addEventListener("click", () => {
            works.forEach(wk => {
                wk.classList.remove('active_content')
                if (btn.id.includes(wk.id)){
                    wk.classList.add('active_content')
                }
            });
        });
    }
});