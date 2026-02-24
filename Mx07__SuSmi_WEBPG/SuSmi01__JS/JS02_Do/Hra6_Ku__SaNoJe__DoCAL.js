// SySmz.v.Du
"use strict";
const DoCAL = { SyTu_vsg: "Do", VaDy_vsg: "CAL" };
Ko.Ji_v.DoCAL = DoCAL;

//==============================================
// QUALITIES
//==============================================
const ViCAL = Object.freeze
({
	ViCAL0_qk: 0
	, ViCAL1_qk: 1
	, ViCAL2_qk: 2
});

//==============================================
// ACTIONS
//==============================================

//-------------------------------------------------
DoCAL.SmaYz = function( Sa_l )
//-------------------------------------------------
{
	SmaJe( "[" + this.VaDy_vsg + "] SmaYz" );
}


//==============================================
// LIFE
//==============================================

//-------------------------------------------------
DoCAL.BriYi = function( Sa_l )
//-------------------------------------------------
{
}

//-------------------------------------------------
async function shareCalendarEvent({ title, description, location, startDate, endDate })
//-------------------------------------------------
{
	const formatDate = (date) =>
	{
	  const pad = (n) => String(n).padStart(2, '0');

	  return date.getUTCFullYear() +
		pad(date.getUTCMonth() + 1) +
		pad(date.getUTCDate()) + 'T' +
		pad(date.getUTCHours()) +
		pad(date.getUTCMinutes()) +
		pad(date.getUTCSeconds()) + 'Z';
	};

	const icsContent = `
  BEGIN:VCALENDAR
  VERSION:2.0
  PRODID:-//WebShare Demo//EN
  BEGIN:VEVENT
  UID:${Date.now()}@PowerOurPeople.com
  DTSTAMP:${formatDate(new Date())}
  DTSTART:${formatDate(new Date(startDate))}
  DTEND:${formatDate(new Date(endDate))}
  SUMMARY:${title}
  DESCRIPTION:${description}
  LOCATION:${location}
  END:VEVENT
  END:VCALENDAR
	`.trim();

	//@@@
	// FILE SAVEAS
	const fileName = 'event'+new Date().toISOString()+'.ics';
	const file = new File([icsContent], fileName, { type: 'text/calendar' });
	const url = URL.createObjectURL(file);
	const a = document.createElement('a');
	a.href = url;
	a.download = fileName;
	a.click();
	URL.revokeObjectURL(url);

}

//-------------------------------------------------
function generateDummyCalendarEvent()
//-------------------------------------------------
{
	const now = new Date();

	const startDate = new Date(now.getTime() + 5 * 60 * 1000); // 5min from now
	const endDate = new Date(startDate.getTime() + 15 * 60 * 1000); // 15min after start

	shareCalendarEvent
	({
	  title: 'Sample Meeting',
	  description: 'This is a sample calendar invite',
	  location: 'PowerOurPeople WebSite',

	  startDate: startDate,
	  endDate: endDate
	});
}


//-------------------------------------------------
DoCAL.BriYa = async function( Yz_k )
//-------------------------------------------------
{
	const Sa_l = SySmz__YaFz_v( DoCAL );



	return SySmz__YaFx_v( Sa_l );
}


//-------------------------------------------------
DoCAL.Mo = async function( Sa_l, Jy_k, Mo_l )
//-------------------------------------------------
{

	generateDummyCalendarEvent();

}


//==============================================
// END
//==============================================
