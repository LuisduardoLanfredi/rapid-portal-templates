

var placeholderDiv = document.getElementById("tableauViz");
var url = "https://tableau.zuar.com/views/Superstore-PublishedinSomeSubProject/Overview?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link";
var options = {
	hideTabs: true,
	width: "800px",
	height: "700px",
	onFirstInteractive: function () {
		// The viz is now ready and can be safely used.
	}
};
var viz = new tableau.Viz(placeholderDiv, url, options);