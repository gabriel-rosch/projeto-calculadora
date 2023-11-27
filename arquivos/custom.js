var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Ativar tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Trocar valores do checkbox de 0 pra 1 ou vice-versa (intergração com RD)
$('#interesse-em-receber-contato-comercial-e-commerce-plan').on('change', function() {

	if ($(this).is(':checked')) {
		$(this).val('1');
	} else {
		$(this).val('0');
	}

});

}
/*
     FILE ARCHIVED ON 01:15:43 Dec 08, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:35:18 Oct 03, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 183.862
  exclusion.robots: 0.06
  exclusion.robots.policy: 0.053
  cdx.remote: 0.053
  esindex: 0.009
  LoadShardBlock: 156.023 (3)
  PetaboxLoader3.datanode: 164.74 (4)
  PetaboxLoader3.resolve: 76.992 (2)
  load_resource: 166.677
*/