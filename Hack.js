// ==UserScript==
// @name         Quiz2020 Autofarm by B.Trọng
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Tự động làm quiz, có nút dừng, đếm ngược reload, xóa data + thêm thông báo điểm & âm báo khi hoàn thành
// @author       B.Trọng
// @match        https://quiz2020.com/* 
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    // --- Cấu hình ---
    const FIXED_NAME   = 'H@acker'; //Chỉnh tên ở đây chỉnh tên H@acker thành tên bạn muốn ví dụ Hello thì code sẽ là const FIXED_NAME   = 'Hello';
    const COUNT_START  = 5;         // đếm ngược reload
    const BEEP_ENABLED = true;      // bật âm báo khi hoàn thành
    const PAUSE_BETWEEN_RUNS = 2000; // thời gian nghỉ giữa các lượt (ms)
    let stopScript = false;
    let countdown = COUNT_START;

    // --- chờ jQuery ---
    function waitForjQuery(cb) {
        if (window.jQuery) return cb();
        setTimeout(() => waitForjQuery(cb), 100);
    }

    waitForjQuery(() => {
        const $ = window.jQuery;

        // --- UI: tác giả, nút dừng, đếm ngược, thông báo điểm ---
        const baseStyle = `
            position: fixed;
            z-index: 9999;
            right: 20px;
            background: rgba(0,0,0,0.8);
            color: #fff;
            font-family: Arial,sans-serif;
            border-radius: 6px;
            padding: 8px 12px;
            text-align: center;
            box-shadow: 0 0 5px #000;
        `;
        const authorNote    = $(`<div style="${baseStyle}; bottom: 20px;">🚀 Script by <b>B.Trọng</b></div>`);
        const stopButton    = $(`<button style="${baseStyle}; bottom: 60px; background:red; border:none; cursor:pointer;">Dừng Script</button>`);
        const countdownEl   = $(`<div style="${baseStyle}; bottom:100px;">Reload in: <span id="qc-count">${countdown}</span>s</div>`);
        const scoreNotice   = $(`<div style="${baseStyle}; bottom:140px; display:none;">🎉 Điểm: <span id="qc-score">0</span></div>`);
        $('body').append(authorNote, stopButton, countdownEl, scoreNotice);

        stopButton.on('click', () => {
            stopScript = true;
            alert('Script đã dừng.');
        });

        // --- beep âm thanh khi hoàn thành ---
        function playBeep() {
            if (!BEEP_ENABLED) return;
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const o = ctx.createOscillator();
            o.frequency.value = 440;
            o.connect(ctx.destination);
            o.start();
            setTimeout(() => { o.stop(); ctx.close(); }, 200);
        }

        // --- chạy quiz ---
        function runQuiz() {
            if (stopScript) return;

            // click đáp án đúng
            $('.answer.center.correct').click(); //Nếu muốn điền đáp án sai hết thì thay phần $('.answer.center.correct').click(); thành $('.answer.center.incorrect').click()
            // điền tên & start
            const input = $('input[type="text"], input[name="name"]');
            const btn   = $('#start');
            if (input.length && btn.length) {
                input.val(FIXED_NAME).trigger('input');
                btn.click();
            }

            // chờ hoàn thành
            const checker = setInterval(() => {
                if (stopScript) return clearInterval(checker);
                const scoreEl = $('.quiz-score');
                if (scoreEl.length) {
                    const sc = scoreEl.text().trim();
                    console.log('Điểm:', sc);
                    $('#qc-score').text(sc);
                    scoreNotice.show();
                    playBeep();

                    // bấm tiếp hoặc làm lại
                    $('button, .next-button').filter((i, el) =>
                        /tiếp theo|làm lại/i.test($(el).text())
                    ).click();
                    clearInterval(checker);
                }
            }, 1000);
        }

        $(document).ready(runQuiz);

        // --- đếm ngược → xóa data → reload (setTimeout để chạy cả khi tab không active) ---
        (function tick() {
            if (stopScript) return;
            if (countdown <= 0) {
                // xóa cookie
                document.cookie.split(';').forEach(c => {
                    document.cookie = c.replace(/^ +/, '')
                        .replace(/=.*/, '=;expires=' + new Date(0).toUTCString() + ';path=/');
                });
                // xóa storage
                localStorage.clear();
                sessionStorage.clear();
                // reload
                window.location.reload();
            } else {
                $('#qc-count').text(countdown);
                setTimeout(() => {
                    countdown--;
                    tick();
                }, 1000);
            }
        })();

        // --- Chạy liên tục nhiều lượt ---
        function runMultipleRounds() {
            if (stopScript) return;
            runQuiz();
            setTimeout(runMultipleRounds, PAUSE_BETWEEN_RUNS);
        }

        // --- Bắt đầu chạy liên tục nếu cần ---
        runMultipleRounds();
    });
})();
