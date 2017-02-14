var canvas = document.getElementById('star');
canvas.width  = 1000;
canvas.height = 1000;

    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

		ctx.beginPath();
		ctx.moveTo(500,545);
		ctx.lineTo(590,500);
		ctx.lineTo(800,545);
		ctx.fill();
      
        ctx.beginPath();
		ctx.moveTo(500,545);
		ctx.lineTo(595,595);
        ctx.lineTo(795,545);
        ctx.stroke();
      
        ctx.beginPath();
        ctx.moveTo(500,545);
		ctx.lineTo(595,595);
        ctx.lineTo(645,695);
		ctx.fill();
      
        ctx.beginPath();
        ctx.moveTo(500,545);
        ctx.lineTo(645, 695);
        ctx.lineTo(545, 645);
        ctx.lineTo(500, 545);
		ctx.stroke();
      
        ctx.beginPath();
		ctx.moveTo(500,545);
        ctx.lineTo(545, 645);
        ctx.lineTo(500, 845);
		ctx.fill();
    
        ctx.beginPath();
		ctx.moveTo(500,545);
        ctx.lineTo(455, 645);
        ctx.lineTo(500, 845);
		ctx.stroke();
      
        ctx.beginPath();
        ctx.moveTo(500,545);
		ctx.lineTo(415,495);
        ctx.lineTo(355,395);
		ctx.fill();
      
        ctx.beginPath();
        ctx.moveTo(500,545);
        ctx.lineTo(355, 395);
        ctx.lineTo(455, 445);
        ctx.lineTo(500, 545);
		ctx.stroke();
      
        ctx.beginPath();
		ctx.moveTo(500,545);
        ctx.lineTo(455, 445);
        ctx.lineTo(500, 245);
		ctx.fill();
      
        ctx.beginPath();
		ctx.moveTo(500,545);
        ctx.lineTo(545, 445);
        ctx.lineTo(500, 245);
		ctx.stroke();
    
        ctx.beginPath();
		ctx.moveTo(500,545);
		ctx.lineTo(410,590);
		ctx.lineTo(200,545);
		ctx.fill();
      
        ctx.beginPath();
		ctx.moveTo(500,545);
		ctx.lineTo(415,495);
        ctx.lineTo(205,545);
        ctx.stroke();
      
        ctx.beginPath();
		ctx.moveTo(500,545);
        ctx.lineTo(455, 645);
        ctx.lineTo(355, 700);
		ctx.fill();
      
        ctx.beginPath();
		ctx.moveTo(500,545);
        ctx.lineTo(355, 700);
        ctx.lineTo(410, 585);
		ctx.stroke();
      
        ctx.beginPath();
		ctx.moveTo(500,545);
        ctx.lineTo(545, 445);
        ctx.lineTo(645, 390);
		ctx.fill();
      
        ctx.beginPath();
		ctx.moveTo(500,545);
        ctx.lineTo(645, 390);
        ctx.lineTo(590, 505);
		ctx.stroke();

        ctx.beginPath();
        ctx.arc(500,545,300,0,Math.PI*2,true);
        ctx.stroke();
          
        ctx.font = '24px serif';
        ctx.fillText('N', 490, 230);
          
        ctx.font = '24px serif';
        ctx.fillText('NE', 710, 325);
          
        ctx.font = '24px serif';
        ctx.fillText('W', 165, 555);
          
        ctx.font = '24px serif';
        ctx.fillText('NW', 255, 325);
          
        ctx.font = '24px serif';
        ctx.fillText('E', 813, 555);   
          
        ctx.font = '24px serif';
        ctx.fillText('S', 490, 875);
          
        ctx.font = '24px serif';
        ctx.fillText('SW', 255, 785);
          
        ctx.font = '24px serif';
        ctx.fillText('SE', 710, 785);
          
        ctx.beginPath();
        ctx.arc(500,545,345,0,Math.PI*2,true);
        ctx.stroke();
    }