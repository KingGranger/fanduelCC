(window.webpackJsonpfanduel_challenge=window.webpackJsonpfanduel_challenge||[]).push([[0],{131:function(t,e,a){t.exports=a(258)},136:function(t,e,a){},257:function(t,e,a){},258:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),i=(a(136),a(109)),s=a(110),l=a(121),u=a(111),m=a(122),h=a(263),d=a(267),p=a(268),f=a(120),y=a(265),g=a(23),E=a(266),b=a(264),k=function(t){var e=t.relatedArtistData,a=t.changeArtist,n=["Sorry no related Artists"],c=function(){return 0===Object.keys(e).length||Object.keys(e).includes("error")?n:e.artists};return r.a.createElement(E.a,{textAlign:"center"},r.a.createElement(p.a,null,"Related Artists"),c()!==n?"Click on Artist for more information":null,r.a.createElement(b.a,{horizontal:!0},c()[0]&&c()!==n?c().map(function(t){return r.a.createElement(b.a.Item,{key:t.id,onClick:function(e){return a(e,t.id)}},t.name,r.a.createElement("br",null),r.a.createElement(f.a,{src:0!==t.images.length?t.images[t.images.length-1].url:""}))}):r.a.createElement(b.a.Item,null,n[0])))},w=function(t){var e=t.topTenData,a=["Sorry no Top Ten tracks"],n=function(){return 0===Object.keys(e).length||Object.keys(e).includes("error")?a:e.tracks};return r.a.createElement(E.a,null,r.a.createElement(p.a,null,"Top Ten List"),r.a.createElement(b.a,{ordered:!0},n()!==a&&n().length>0?n().map(function(t){var e=t.uri.split(":");return r.a.createElement(b.a.Item,{key:t.id},t.name,r.a.createElement("br",null),r.a.createElement("iframe",{src:"https://open.spotify.com/embed/".concat(e[1],"/").concat(e[2]),width:"100%",height:"100px",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}))}):null))},A=function(t){var e=t.artistData,a=t.relatedArtistData,n=t.changeArtist,c=t.topTenData;return r.a.createElement(h.a,{textAlign:"center"},r.a.createElement(d.a,{celled:!0},r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Column,{width:12},r.a.createElement(p.a,{as:"h1"},e.name),r.a.createElement(f.a,{src:0===Object.keys(e).length||Object.keys(e).includes("error")||0===e.images?"":e.images[1].url,centered:!0}),r.a.createElement("h2",null,e.name," has ",0===Object.keys(e).length||Object.keys(e).includes("error")?"":e.followers.total," followers"),r.a.createElement(y.a,{color:"green",icon:!0},r.a.createElement("a",{href:0===Object.keys(e).length||Object.keys(e).includes("error")?"":e.external_urls.spotify},r.a.createElement(g.a,{name:"spotify"}),"Artist Page"))),r.a.createElement(d.a.Column,{width:4},r.a.createElement(w,{topTenData:c}))),r.a.createElement(k,{relatedArtistData:a,changeArtist:n})))},v=(a(257),window.location.hash.substring(1).split("&").reduce(function(t,e){if(e){var a=e.split("=");t[a[0]]=decodeURIComponent(a[1])}return t},{})),D=function(t){function e(){var t,a;Object(i.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={artistId:"4dpARuHxo51G3z768sgnrY",artistData:{},relatedArtistData:{},topTenData:{}},a.callSpotify=function(t){var e=v.access_token;if(e){var n={headers:{Authorization:"Bearer "+e}};fetch("https://api.spotify.com/v1/artists/".concat(t),n).then(function(t){return t.json()}).then(function(t){return a.setState({artistData:t})}),fetch("https://api.spotify.com/v1/artists/".concat(t,"/top-tracks?country=us"),n).then(function(t){return t.json()}).then(function(t){return a.setState({topTenData:t})}),fetch("https://api.spotify.com/v1/artists/".concat(t,"/related-artists"),n).then(function(t){return t.json()}).then(function(t){return a.setState({relatedArtistData:t})})}},a.changeArtist=function(t,e){a.setState({artistId:e})},a}return Object(m.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.callSpotify(this.state.artistId)}},{key:"componentDidUpdate",value:function(t,e){this.state.artistId!==e.artistId&&this.callSpotify(this.state.artistId)}},{key:"render",value:function(){var t=this.state,e=t.artistData,a=t.topTenData,n=t.relatedArtistData;return r.a.createElement("div",{className:"App"},0===Object.keys(e).length||e.error?r.a.createElement("button",{className:"GetToken"},r.a.createElement("a",{href:"https://accounts.spotify.com/authorize?client_id=".concat("b238b8d38645462ab2ae05598e54bdfb","&redirect_uri=").concat("http://poor-sun.surge.sh","&response_type=token")},"Generate Spotify Token")):null,r.a.createElement("br",null),e.id?r.a.createElement(A,{artistData:e,relatedArtistData:n,changeArtist:this.changeArtist,topTenData:a}):null)}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[131,1,2]]]);
//# sourceMappingURL=main.8fc1d746.chunk.js.map