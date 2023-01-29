let darkmode = false;

/*function changeDarkmode() {
	if (darkmode) {
		darkmode = false;
		document.documentElement.style.setProperty("--text-color", "black");
		document.documentElement.style.setProperty("--effet-dark-mode", "black");
		document.documentElement.style.setProperty("--background-image", "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)");
		document.getElementById("dark-light-mode").innerHTML = "[Dark mode]";
	}
	else {
		darkmode = true;
		document.documentElement.style.setProperty("--text-color", "#efe7e5");
		document.documentElement.style.setProperty("--effet-dark-mode", "whitesmoke");
		document.documentElement.style.setProperty("--background-image", "linear-gradient(to right, #434343 0%, black 100%)");
		document.getElementById("dark-light-mode").innerHTML = "[Light mode]";
	}
}*/

function changeDarkmode() {
	if (darkmode) {
		darkmode = false;
	  if (window.matchMedia("(max-width: 767px)").matches) {
		document.documentElement.style.setProperty("--effet-dark-mode", "null");
	  }
	  else {
		 document.documentElement.style.setProperty("--effet-dark-mode", "black");
	  }
	  document.documentElement.style.setProperty("--text-color", "black");
	  document.documentElement.style.setProperty("--background-image", "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)");
	  document.getElementById("dark-light-mode").innerHTML = "[Dark mode]";
	}
	else {
		darkmode = true;
	  if (window.matchMedia("(max-width: 767px)").matches) {
		document.documentElement.style.setProperty("--effet-dark-mode", "null");
	  }
	  else {
		document.documentElement.style.setProperty("--effet-dark-mode", "whitesmoke");
	  }
	  document.documentElement.style.setProperty("--text-color", "#efe7e5");
	  document.documentElement.style.setProperty("--background-image", "linear-gradient(to right, #434343 0%, black 100%)");
	  document.getElementById("dark-light-mode").innerHTML = "[Light mode]";
	}
}