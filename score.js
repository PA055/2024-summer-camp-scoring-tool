var _0x20852b=_0x11b0;(function(_0x268e1a,_0x1d0e80){var _0x4d1d5f=_0x11b0,_0x19c890=_0x268e1a();while(!![]){try{var _0x3dee1d=parseInt(_0x4d1d5f(0x99))/0x1+-parseInt(_0x4d1d5f(0xcd))/0x2+-parseInt(_0x4d1d5f(0x86))/0x3*(parseInt(_0x4d1d5f(0x94))/0x4)+parseInt(_0x4d1d5f(0x92))/0x5+parseInt(_0x4d1d5f(0xb2))/0x6*(parseInt(_0x4d1d5f(0xb5))/0x7)+parseInt(_0x4d1d5f(0x9d))/0x8*(parseInt(_0x4d1d5f(0xaf))/0x9)+-parseInt(_0x4d1d5f(0x8c))/0xa*(-parseInt(_0x4d1d5f(0x85))/0xb);if(_0x3dee1d===_0x1d0e80)break;else _0x19c890['push'](_0x19c890['shift']());}catch(_0x243721){_0x19c890['push'](_0x19c890['shift']());}}}(_0x6181,0xdff48));var lastClickedInZone=![],lastClickedTeamRed=![],redPoints=0x8,bluePoints=0x0,activeStack=[],stacks=[],flag=_0x20852b(0xaa);function _0x11b0(_0x4dc4c1,_0x330c69){var _0x618139=_0x6181();return _0x11b0=function(_0x11b0db,_0x38ca1d){_0x11b0db=_0x11b0db-0x71;var _0xeb1e9f=_0x618139[_0x11b0db];return _0xeb1e9f;},_0x11b0(_0x4dc4c1,_0x330c69);}function updateStackValue(){var _0x4c73eb=_0x20852b,_0x2ea8c9=0x0;$(_0x4c73eb(0xae))['each'](function(_0x30162a){var _0xb98940=_0x4c73eb;_0x2ea8c9+=(0x2+$(this)[_0xb98940(0xc8)]())*(lastClickedInZone?0x2:0x1);}),$(_0x4c73eb(0xba))[_0x4c73eb(0xc7)](function(_0x558b70){var _0x45e803=_0x4c73eb;_0x2ea8c9+=(0x1+$(this)[_0x45e803(0xc8)]())*(lastClickedInZone?0x2:0x1);}),$(_0x4c73eb(0xb9))[_0x4c73eb(0xcc)](_0x2ea8c9+_0x4c73eb(0x98));}function _0x6181(){var _0x11f324=['#left-field','#reset','11vQUbRH','6RCnAkX','push','value','#auton-bonus-team','#red','stack-','1325920KYzXwP','remove','preventDefault','team-blue','hasClass','length','6860115yhdLrD','addClass','3494080mCXAdj','<img\x20src=\x22images/green_cube.png\x22\x20height=\x2230px\x22>','attr','red','\x20points','613840tOyDtG','event','split','pageY','8dwcdYe','green','#right-field','top','#blue','div','.cube-point-val','removeClass','<p>Remove</p>','#add-purple-cube-btn','<div\x20class=\x22stack\x22></div>','),\x20calc(100vh\x20*\x20','#stack\x20.cube','pbcctf{TH!s_1SN\'7_the_R!gH7_COmmI7!?}','blue','hidden','#all-stacks\x20h1','#stack\x20.green.cube','14123178JjxtTh','.left-zone','#all-stacks','12vHCdsF','#field','append','1609664rZgbYz','height','submit','won','#stack-point-value','#stack\x20.purple.cube','#add-green-cube-btn','#cube-color','left','red-zone','.stack','change','translate(calc(100vh\x20*\x201.14110429\x20*\x20','#num-cubes','#red-points','css','blue-zone','#quick-stack','each','index','#cancel-btn','#stack','purple','text','2966482vjwBth','.spacer','target','children','\x20points</p><p>Remove</p></div>','<div\x20class=\x22green\x20cube\x22><img\x20src=\x22images/green_cube.png\x22\x20height=\x2230px\x22><p\x20class=\x22cube-point-val\x22>','val','#stack-creator','click','<div\x20class=\x22purple\x20cube\x22><img\x20src=\x22images/purple_cube.png\x22\x20height=\x2240px\x22><p\x20class=\x22cube-point-val\x22>','#zone','#all-stacks\x20.stack','transform','team-red','pageX','blue-normal','offset','width','#blue-points','.right-zone'];_0x6181=function(){return _0x11f324;};return _0x6181();}function clearStack(){var _0x2dbe61=_0x20852b;$(_0x2dbe61(0xa9))[_0x2dbe61(0xc7)](function(_0x3ccfc3){$(this)['remove']();}),activeStack=[];}function updatePoints(){var _0x453aba=_0x20852b;$(_0x453aba(0xc3))['text'](redPoints+_0x453aba(0x98)),$(_0x453aba(0x81))[_0x453aba(0xcc)](bluePoints+'\x20points');if(redPoints>bluePoints)$('#blue')[_0x453aba(0xa4)]('won'),$(_0x453aba(0x8a))['addClass'](_0x453aba(0xb8));else bluePoints>redPoints?($(_0x453aba(0xa1))[_0x453aba(0x93)](_0x453aba(0xb8)),$('#red')[_0x453aba(0xa4)](_0x453aba(0xb8))):($('#blue')[_0x453aba(0xa4)](_0x453aba(0xb8)),$(_0x453aba(0x8a))[_0x453aba(0xa4)](_0x453aba(0xb8)));}function addStack(_0x164101){var _0x39356c=_0x20852b;stacks[_0x39356c(0x87)](_0x164101),stackDiv=$(_0x39356c(0xa7)),stackDiv[_0x39356c(0xb4)](_0x39356c(0xa5));var _0x4ef418=0x0;for(var _0x535304=0x0;_0x535304<_0x164101[_0x39356c(0x91)];_0x535304++){_0x164101[_0x535304]==_0x39356c(0xcb)?(_0x4ef418+=(0x1+_0x535304)*(lastClickedInZone?0x2:0x1),stackDiv[_0x39356c(0xb4)]('<img\x20src=\x22images/purple_cube.png\x22\x20height=\x2240px\x22>')):(_0x4ef418+=(0x2+_0x535304)*(lastClickedInZone?0x2:0x1),stackDiv['append'](_0x39356c(0x95)));}lastClickedTeamRed?(stackDiv[_0x39356c(0x93)]('team-red'),redPoints+=_0x4ef418):(stackDiv[_0x39356c(0x93)](_0x39356c(0x8f)),bluePoints+=_0x4ef418);if(lastClickedInZone)stackDiv[_0x39356c(0x93)]('in-zone');stackDiv[_0x39356c(0x96)]('id',_0x39356c(0x8b)+(stacks[_0x39356c(0x91)]-0x1)+'-'+_0x4ef418),$(_0x39356c(0xad))['after'](stackDiv),updatePoints();}$(_0x20852b(0x82))[_0x20852b(0x77)](function(_0x282e09){var _0x5ce983=_0x20852b;clearStack();var _0x58cb64=(_0x282e09[_0x5ce983(0x7d)]-$('#field')[_0x5ce983(0x7f)]()[_0x5ce983(0xbd)])/$(_0x5ce983(0xb3))[_0x5ce983(0x80)](),_0x444c7e=(_0x282e09[_0x5ce983(0x9c)]-$(_0x5ce983(0xb3))[_0x5ce983(0x7f)]()['top'])/$('#field')[_0x5ce983(0xb6)]();lastClickedInZone=!![],lastClickedTeamRed=![],$(_0x5ce983(0x76))[_0x5ce983(0xc4)](_0x5ce983(0x7b),_0x5ce983(0xc1)+_0x58cb64+'),\x20calc(100vh\x20*\x20'+_0x444c7e+'))'),$(_0x5ce983(0x76))['removeClass'](_0x5ce983(0xac));}),$(_0x20852b(0xb0))[_0x20852b(0x77)](function(_0x1b2e8c){var _0x5a9cab=_0x20852b;clearStack();var _0x447e7a=(_0x1b2e8c[_0x5a9cab(0x7d)]-$(_0x5a9cab(0xb3))[_0x5a9cab(0x7f)]()[_0x5a9cab(0xbd)])/$(_0x5a9cab(0xb3))[_0x5a9cab(0x80)](),_0x4bf23a=(_0x1b2e8c['pageY']-$('#field')[_0x5a9cab(0x7f)]()[_0x5a9cab(0xa0)])/$(_0x5a9cab(0xb3))[_0x5a9cab(0xb6)]();lastClickedInZone=!![],lastClickedTeamRed=!![],$(_0x5a9cab(0x76))[_0x5a9cab(0xc4)](_0x5a9cab(0x7b),_0x5a9cab(0xc1)+_0x447e7a+_0x5a9cab(0xa8)+_0x4bf23a+'))'),$(_0x5a9cab(0x76))[_0x5a9cab(0xa4)](_0x5a9cab(0xac));}),$(_0x20852b(0x9f))[_0x20852b(0x77)](function(_0x35d686){var _0x51492c=_0x20852b;if(this!=_0x35d686[_0x51492c(0x71)]||_0x35d686[_0x51492c(0x9a)]==$(_0x51492c(0xce)))return;clearStack();var _0x221b3f=(_0x35d686[_0x51492c(0x7d)]-$(_0x51492c(0xb3))[_0x51492c(0x7f)]()[_0x51492c(0xbd)])/$(_0x51492c(0xb3))['width'](),_0x163299=(_0x35d686[_0x51492c(0x9c)]-$(_0x51492c(0xb3))['offset']()[_0x51492c(0xa0)])/$(_0x51492c(0xb3))['height']();lastClickedInZone=![],lastClickedTeamRed=![],$(_0x51492c(0x76))['css'](_0x51492c(0x7b),_0x51492c(0xc1)+_0x221b3f+_0x51492c(0xa8)+_0x163299+'))'),$(_0x51492c(0x76))[_0x51492c(0xa4)](_0x51492c(0xac));}),$(_0x20852b(0x83))[_0x20852b(0x77)](function(_0xb92037){var _0x4d2577=_0x20852b;if(this!=_0xb92037['target']||_0xb92037[_0x4d2577(0x9a)]==$('.spacer'))return;clearStack();var _0xef5ba1=(_0xb92037[_0x4d2577(0x7d)]-$(_0x4d2577(0xb3))['offset']()[_0x4d2577(0xbd)])/$(_0x4d2577(0xb3))[_0x4d2577(0x80)](),_0x9d2c0f=(_0xb92037[_0x4d2577(0x9c)]-$(_0x4d2577(0xb3))[_0x4d2577(0x7f)]()[_0x4d2577(0xa0)])/$(_0x4d2577(0xb3))[_0x4d2577(0xb6)]();lastClickedInZone=![],lastClickedTeamRed=!![],$(_0x4d2577(0x76))['css'](_0x4d2577(0x7b),'translate(calc(100vh\x20*\x201.14110429\x20*\x20'+_0xef5ba1+'),\x20calc(100vh\x20*\x20'+_0x9d2c0f+'))'),$(_0x4d2577(0x76))[_0x4d2577(0xa4)](_0x4d2577(0xac));}),$(_0x20852b(0xa6))[_0x20852b(0x77)](function(){var _0x530402=_0x20852b;$(_0x530402(0xca))[_0x530402(0xb4)](_0x530402(0x78)+(0x1+$(_0x530402(0xa9))[_0x530402(0x91)])*(lastClickedInZone?0x2:0x1)+_0x530402(0x73)),activeStack[_0x530402(0x87)](_0x530402(0xcb)),updateStackValue();}),$(_0x20852b(0xbb))[_0x20852b(0x77)](function(){var _0x591faa=_0x20852b;$('#stack')[_0x591faa(0xb4)](_0x591faa(0x74)+(0x2+$(_0x591faa(0xa9))[_0x591faa(0x91)])*(lastClickedInZone?0x2:0x1)+_0x591faa(0x73)),activeStack[_0x591faa(0x87)](_0x591faa(0x9e)),updateStackValue();}),$(_0x20852b(0xca))['on']('click',_0x20852b(0xa2),function(){var _0x25d517=_0x20852b;this[_0x25d517(0x8d)](),$('#stack\x20.green.cube')[_0x25d517(0xc7)](function(_0x1f2c02){var _0x5bdebf=_0x25d517;$(this)[_0x5bdebf(0x72)](_0x5bdebf(0xa3))[_0x5bdebf(0xcc)]((0x2+$(this)['index']())*(lastClickedInZone?0x2:0x1)+_0x5bdebf(0x98));}),$(_0x25d517(0xba))['each'](function(_0x53d107){var _0x2a854b=_0x25d517;$(this)[_0x2a854b(0x72)](_0x2a854b(0xa3))['text']((0x1+$(this)[_0x2a854b(0xc8)]())*(lastClickedInZone?0x2:0x1)+_0x2a854b(0x98));}),updateStackValue();}),$(_0x20852b(0xc9))[_0x20852b(0x77)](function(){var _0xa8cc3d=_0x20852b;$(_0xa8cc3d(0x76))[_0xa8cc3d(0x93)](_0xa8cc3d(0xac)),clearStack();}),$('#done-btn')[_0x20852b(0x77)](function(){var _0x2ec4b8=_0x20852b;addStack(activeStack),$(_0x2ec4b8(0x76))[_0x2ec4b8(0x93)](_0x2ec4b8(0xac)),clearStack();}),$(_0x20852b(0xc6))[_0x20852b(0xb7)](function(_0x3edfe3){var _0x134772=_0x20852b;_0x3edfe3['preventDefault'](),activeStack=[];for(var _0x37e50c=0x0;_0x37e50c<parseInt($(_0x134772(0xc2))[_0x134772(0x75)]());_0x37e50c++)activeStack[_0x134772(0x87)]($(_0x134772(0xbc))['val']());if($(_0x134772(0x79))[_0x134772(0x75)]()==_0x134772(0x7e))lastClickedInZone=![],lastClickedTeamRed=![];else{if($('#zone')['val']()==_0x134772(0xc5))lastClickedInZone=!![],lastClickedTeamRed=![];else{if($(_0x134772(0x79))['val']()=='red-normal')lastClickedInZone=![],lastClickedTeamRed=!![];else{if($('#zone')['val']()==_0x134772(0xbe))lastClickedInZone=!![],lastClickedTeamRed=!![];else return alert('something\x20went\x20wrong'),![];}}}addStack(activeStack);}),$('#auton-bonus-team')[_0x20852b(0xc0)](function(){var _0x40ab4c=_0x20852b;this[_0x40ab4c(0x88)]==_0x40ab4c(0xab)&&(bluePoints+=0x8,redPoints-=0x8),this['value']==_0x40ab4c(0x97)&&(redPoints+=0x8,bluePoints-=0x8),updatePoints();}),$(_0x20852b(0xb1))['on']('click',_0x20852b(0xbf),function(){var _0x6324=_0x20852b,_0xe8f080=$(this)['attr']('id')[_0x6324(0x9b)]('-')[0x2];if($(this)[_0x6324(0x90)](_0x6324(0x8f)))bluePoints-=_0xe8f080;else $(this)[_0x6324(0x90)](_0x6324(0x7c))&&(redPoints-=_0xe8f080);updatePoints(),this[_0x6324(0x8d)]();}),$(_0x20852b(0x84))[_0x20852b(0xb7)](function(_0xc7c9c3){var _0x8a420e=_0x20852b;_0xc7c9c3[_0x8a420e(0x8e)]();if($('#auton-bonus-team')[_0x8a420e(0x75)]()==_0x8a420e(0xab))redPoints=0x0,bluePoints=0x8;else $(_0x8a420e(0x89))[_0x8a420e(0x75)]()==_0x8a420e(0x97)&&(redPoints=0x8,bluePoints=0x0);updatePoints(),stacks=[],$(_0x8a420e(0x7a))[_0x8a420e(0xc7)](function(){var _0x2cb06a=_0x8a420e;$(this)[_0x2cb06a(0x8d)]();});});

