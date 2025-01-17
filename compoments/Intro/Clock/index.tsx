import classNames from 'classnames'
import { useEffect } from 'react'
import cardStyles from 'styles/card.module.scss'
import styles from './index.module.scss'
const Clock =()=>{
    useEffect(()=>{
        const canvas = document.querySelector('canvas');
        const ctx = canvas!.getContext('2d') as any;
        let nowDate = new Date();
        let second = nowDate.getSeconds();
        let minute = nowDate.getMinutes();
        let hour = nowDate.getHours();
        draw()
        
        function draw() {
            nowDate = new Date();
            second = nowDate.getSeconds();
            minute = nowDate.getMinutes();
            hour = nowDate.getHours();
            ctx.clearRect(0, 0, 800, 800);
            ctx.beginPath();
            ctx.lineCap = "round";
            for (let i = 0; i < 60; i++) {
                if ((i + 5) % 5 === 0) {
                    continue;
                }
                ctx.moveTo(Math.cos((i * 6) / 180 * Math.PI) * 350 + 400, Math.sin((i * 6) / 180 * Math.PI) * 350 + 400);
                ctx.lineTo(Math.cos((i * 6) / 180 * Math.PI) * 335 + 400, Math.sin((i * 6) / 180 * Math.PI) * 335 + 400);
            }
            ctx.save();
            ctx.closePath();
            ctx.lineWidth = 7;
            ctx.strokeStyle = '#000';
            ctx.stroke();
        
            ctx.beginPath();
            ctx.lineCap = "round";
            for (let i = 1; i < 13; i++) {
                ctx.moveTo(Math.cos((i * 30) / 180 * Math.PI) * 350 + 400, -Math.sin((i * 30) / 180 * Math.PI) * 350 + 400);
                ctx.lineTo(Math.cos((i * 30) / 180 * Math.PI) * 320 + 400, -Math.sin((i * 30) / 180 * Math.PI) * 320 + 400);
                ctx.font = "50px Arial";
                if (i > 9) {
                    ctx.fillText(i, Math.cos((i * 30 - 90) / 180 * Math.PI) * 280 + 400 - 25, Math.sin((i * 30 - 90) / 180 * Math.PI) * 280 + 400 + 25);
                } else {
                    ctx.fillText(i, Math.cos((i * 30 - 90) / 180 * Math.PI) * 280 + 388, Math.sin((i * 30 - 90) / 180 * Math.PI) * 280 + 400 + 20);
                }
            }
            ctx.lineWidth = 11;
            ctx.strokeStyle = '#000';
            ctx.stroke();
            ctx.closePath();
            ctx.restore();
        
            ctx.beginPath();
            ctx.font = "24px Arial";
            ctx.fillText('ALWAYS - SITE', 320, 560)
            ctx.closePath();
        
            ctx.beginPath();
            ctx.moveTo(Math.cos((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 220 + 400, Math.sin((hour * 30 + minute / 2 - 90) / 180 * Math.PI) * 220 + 400);
            ctx.lineTo(400, 400);
            ctx.save();
            ctx.lineCap = "round";
            ctx.closePath();
            ctx.shadowOffsetX = -5;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#000";
            ctx.lineWidth = 24;
            ctx.strokeStyle = '#222';
            ctx.stroke();
            ctx.restore();
        
            ctx.beginPath();
            ctx.moveTo(Math.cos((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 300 + 400, Math.sin((minute * 6 + second * 0.1 - 90) / 180 * Math.PI) * 300 + 400);
            ctx.lineTo(400, 400);
            ctx.save();
            ctx.closePath();
            ctx.shadowOffsetX = -5;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#000";
            ctx.lineWidth = 13;
            ctx.strokeStyle = '#222';
            ctx.stroke();
            ctx.restore();
        
            ctx.beginPath();
            ctx.moveTo(Math.cos((second * 6 - 90) / 180 * Math.PI) * 345 + 400, Math.sin((second * 6 - 90) / 180 * Math.PI) * 345 + 400);
            ctx.lineTo(400, 400);
            ctx.save();
            ctx.closePath();
            ctx.shadowOffsetX = -5;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#000";
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgb(213, 153, 0)';
            ctx.stroke();
            ctx.restore();
            ctx.closePath();
        
            ctx.save();
            ctx.arc(400, 400, 20, 0, Math.PI * 2);
            ctx.shadowOffsetX = -5;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#000";
            ctx.fillStyle = 'rgb(213, 153, 0)';
            ctx.fill();
            ctx.restore();
        }
        setInterval(function() {
            draw();
        }, 1000);
    },[])
    return (
        <div className={classNames(cardStyles.card,styles.clock)}>
             <div className={styles.content}>
             <canvas id="clock-canvas" width="800" height="800">您的浏览器不支持canvas，请更换浏览器！</canvas>
             </div>
        </div>
    )
}

export default Clock