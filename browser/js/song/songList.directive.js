juke.directive('songList', function(PlayerFactory) {
	return {
		restrict: 'E',
		scope: {
			songs: '='
		},
		link: function(scope) {
			scope.toggle = function (song) {
			  if (song !== PlayerFactory.getCurrentSong()) {
			    PlayerFactory.start(song, scope.songs);
			  } else if ( PlayerFactory.isPlaying() ) {
			    PlayerFactory.pause();
			  } else {
			    PlayerFactory.resume();
			  }
			};

			scope.getCurrentSong = function () {
			  return PlayerFactory.getCurrentSong();
			};

			scope.isPlaying = function (song) {
			  return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
			};
		},
		templateUrl: '/js/song/songList.template.html'
	};
});