(() => {
  const $ = selector => document.querySelector(selector);
  const planKey = 'comp504-plan-v1';
  const keys = ['comp504-beginner-reviewer-done-v1','comp504-labs-done-v1','comp504-quiz-stats-v1','comp504-quiz-session-v1',planKey];
  const sessions = [
    {title:'See the whole network',focus:'Read lessons 1–2. Draw PC → switch → router → server and explain each job.',lesson:'1-what-is-a-network',lab:'Lab 1'},
    {title:'Follow one webpage',focus:'Reread lesson 2. Name the data, segment, packet, frame, and bits in order.',lesson:'2-how-one-webpage-travels',lab:'Lab 1'},
    {title:'Signals and media',focus:'Read lesson 3. Compare copper, fiber, Wi-Fi, and duplex modes.',lesson:'3-signals-cables-and-binary',lab:'Cable notes'},
    {title:'Switches and ARP',focus:'Read lesson 4. Predict source learning, flooding, and the first ARP request.',lesson:'4-local-delivery-frames-mac-addresses-and-switches',lab:'Lab 2'},
    {title:'IP and the gateway',focus:'Read lesson 5. Decide whether destinations are local or remote.',lesson:'5-ip-addresses-subnets-and-the-default-gateway',lab:'Lab 4'},
    {title:'Subnetting practice',focus:'Read lesson 6. Solve /25 through /30 network, broadcast, and usable ranges on paper.',lesson:'6-subnetting-without-magic',lab:'Subnet tool'},
    {title:'VLSM design',focus:'Allocate the 10.1.1.0/24 example largest first before opening Packet Tracer.',lesson:'6-subnetting-without-magic',lab:'Lab 5'},
    {title:'Routing and IOS',focus:'Read lesson 7. Configure a router and explain the default route and ping.',lesson:'7-routing-ping-and-ipv6',lab:'Lab 3'},
    {title:'TCP, UDP, and services',focus:'Read lesson 8. Compare TCP/UDP, DNS, HTTP, SMTP, and application tiers.',lesson:'8-tcp-udp-dns-and-application-design',lab:'Practice questions'},
    {title:'Wired and wireless LANs',focus:'Read lesson 9. Compare switching, Wi-Fi, APs, VLANs, and CSMA methods.',lesson:'9-wired-lans-wi-fi-and-vlans',lab:'Wired/Wi-Fi extension'},
    {title:'Design, WAN, and Internet',focus:'Read lesson 10. Explain switched/routed backbones, WAN services, VPN, and ISPs.',lesson:'10-designing-networks-backbones-wans-and-internet-access',lab:'Design scenario'},
    {title:'Security and management',focus:'Read lesson 11. Practise threat/risk, firewall, SNMP, and fault isolation.',lesson:'11-security-management-and-troubleshooting',lab:'Fault log'},
    {title:'Closed-book recall',focus:'Take all 36 interactive questions in exam mode. Review each miss, then work through the lecture slide questions and open-ended set.',lesson:'12-how-to-use-this-for-your-exam',lab:'Practice page'},
    {title:'Full rehearsal',focus:'Complete the supplied final Packet Tracer practice lab, then redo weak Canvas quizzes.',lesson:'12-how-to-use-this-for-your-exam',lab:'Lab 6'}
  ];
  let state;
  try { state = JSON.parse(localStorage.getItem(planKey) || '{}'); } catch { state = {}; }
  state.done ||= [];
  state.minutes ||= 180;
  state.examDate ||= '2026-10-28';

  function store() { try { localStorage.setItem(planKey, JSON.stringify(state)); } catch { /* Page remains usable. */ } }
  function readArray(key) { try { const value=JSON.parse(localStorage.getItem(key)||'[]'); return Array.isArray(value)?value:[]; } catch { return []; } }
  function render() {
    $('#session-list').replaceChildren();
    sessions.forEach((session, i) => {
      const card = document.createElement('div'); card.className='session-card';
      const check = document.createElement('input'); check.type='checkbox'; check.id=`session-${i}`; check.checked=state.done.includes(i); check.setAttribute('aria-label',`Mark session ${i+1} complete`);
      check.addEventListener('change', () => { const done=new Set(state.done); check.checked?done.add(i):done.delete(i); state.done=[...done].sort((a,b)=>a-b); store(); renderMetrics(); card.classList.toggle('complete',check.checked); });
      const copy=document.createElement('div');
      const heading=document.createElement('h3'); heading.textContent=`${String(i+1).padStart(2,'0')} · ${session.title}`;
      const detail=document.createElement('p'); detail.textContent=session.focus;
      const links=document.createElement('div'); links.className='session-links';
      const lesson=document.createElement('a'); lesson.href=`index.html#${session.lesson}`; lesson.textContent='Open lesson ↗';
      const lab=document.createElement('a'); lab.href=session.lab==='Practice page'?'practice.html':'labs.html'; lab.textContent=`${session.lab} ↗`;
      links.append(lesson,lab); copy.append(heading,detail,links); card.append(check,copy); card.classList.toggle('complete',check.checked); $('#session-list').append(card);
    });
    $('#exam-date').value=state.examDate||''; $('#daily-minutes').value=state.minutes;
    renderMetrics();
  }
  function renderMetrics() {
    const remaining=sessions.length-state.done.length;
    const minutes=Math.max(15,Number(state.minutes)||60);
    $('#sessions-done').textContent=`${state.done.length} / ${sessions.length}`;
    $('#lessons-done').textContent=`${readArray('comp504-beginner-reviewer-done-v1').length} / 12`;
    $('#labs-done').textContent=`${readArray('comp504-labs-done-v1').length} / 7`;
    let stats={}; try { stats=JSON.parse(localStorage.getItem('comp504-quiz-stats-v1')||'{}'); } catch { /* Ignore invalid previous value. */ }
    const last=stats.history?.[0]; $('#last-quiz').textContent=last?`${last.correct}/${last.count}`:'—';
    const daysAtPace=Math.ceil(remaining*60/minutes);
    if (state.examDate) {
      const today=new Date(); today.setHours(0,0,0,0);
      const days=Math.ceil((new Date(`${state.examDate}T00:00:00`)-today)/86400000);
      $('#pace-message').textContent=days>0?`${remaining} sessions remain. With ${days} day${days===1?'':'s'} until your exam, aim for about ${Math.ceil(remaining*60/days)} minutes of this plan per day. At your current ${minutes}-minute daily pace, allow about ${daysAtPace} day${daysAtPace===1?'':'s'}.`:'That exam date has arrived or passed. You can still use the sessions as an ordered checklist.';
    } else $('#pace-message').textContent=`${remaining} sessions remain. At ${minutes} minutes per day, allow about ${daysAtPace} day${daysAtPace===1?'':'s'}. Add your exam date for a suggested daily pace.`;
  }
  $('#exam-date').addEventListener('change',event=>{state.examDate=event.target.value;store();renderMetrics();});
  $('#daily-minutes').addEventListener('change',event=>{state.minutes=Math.min(600,Math.max(15,Number(event.target.value)||60));event.target.value=state.minutes;store();renderMetrics();});
  $('#export-progress').addEventListener('click',()=>{
    const data={kind:'COMP504 offline study kit progress',version:1,exportedAt:new Date().toISOString(),values:{}};
    keys.forEach(key=>{const value=localStorage.getItem(key);if(value!==null)data.values[key]=value;});
    const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`COMP504-progress-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    $('#backup-message').textContent='Progress backup downloaded. Keep the JSON file somewhere safe.';
  });
  $('#import-progress').addEventListener('change',async event=>{
    const file=event.target.files?.[0]; if(!file)return;
    try {
      const data=JSON.parse(await file.text());
      if(data.kind!=='COMP504 offline study kit progress'||data.version!==1||!data.values||typeof data.values!=='object')throw new Error('This is not a compatible COMP504 progress backup.');
      for(const [key,value] of Object.entries(data.values))if(!keys.includes(key)||typeof value!=='string'||value.length>100000||!isJson(value))throw new Error('The backup contains invalid progress data.');
      if(!confirm('Replace this browser’s saved COMP504 progress with the imported backup?')){event.target.value='';return;}
      keys.forEach(key=>localStorage.removeItem(key));
      Object.entries(data.values).forEach(([key,value])=>localStorage.setItem(key,value));
      location.reload();
    } catch(error){$('#backup-message').textContent=error.message||'Could not import that file.';event.target.value='';}
  });
  function isJson(value){try{JSON.parse(value);return true;}catch{return false;}}
  render();
})();
