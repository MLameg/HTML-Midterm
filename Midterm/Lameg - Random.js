var iconImg1, iconImg2, iconImg3, iconImg4; 
var pictures = [ "CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO" ];

 
function pickImage()
{
   var index = Math.floor( Math.random() * 7 );
   iconImg.setAttribute( "src", pictures[ index ] + ".png" );
   iconImg.setAttribute( "alt", descriptions[ index ] );
   iconImg1.setAttribute( "src", pictures[ index ] + ".png" );
   iconImg1.setAttribute( "alt", descriptions[ index ] );
   iconImg2.setAttribute( "src", pictures[ index ] + ".png" );
   iconImg2.setAttribute( "alt", descriptions[ index ] );
   iconImg3.setAttribute( "src", pictures[ index ] + ".png" );
   iconImg3.setAttribute( "alt", descriptions[ index ] );

} 
function start()
{
   iconImg = document.getElementById( "image1" );
   iconImg1 = document.getElementById( "image2" );
   iconImg2 = document.getElementById( "image3" );
   iconImg3 = document.getElementById( "image4" );
   iconImg.addEventListener( "click", pickImage, false );
   iconImg1.addEventListener( "click", pickImage, false );
   iconImg2.addEventListener( "click", pickImage, false );
   iconImg3.addEventListener( "click", pickImage, false );
   
} 


function rndmimg() {
	var index1 = Math.floor( Math.random() * 7 );
	var index2 = Math.floor( Math.random() * 7 );
	var index3 = Math.floor( Math.random() * 7 );
	var index4 = Math.floor( Math.random() * 7 );
	
	var img1 = pictures [index1];
	var img2 = pictures [index2];
	var img3 = pictures [index3];
	var img4 = pictures [index4];
	
	document.image1.src = img1;
	document.image2.src = img2;
	document.image3.src = img3;
	document.image4.src = img4;
}

window.addEventListener( "load", start, false );
