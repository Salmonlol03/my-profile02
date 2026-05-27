    const avatar = document.getElementById('avatar');
    const menu = document.getElementById('ctxMenu');
    const fileInput = document.getElementById('fileInput');
    const profileImg = document.getElementById('profileImg');
    const fallback = document.getElementById('fallback');


    // โหลดรูปที่บันทึกไว้เมื่อเปิดหน้าใหม่
const saved = localStorage.getItem('profileImg');
if (saved) {
  profileImg.src = saved;
  profileImg.style.display = '';
  fallback.style.display = 'none';
}

    // Show context menu on right-click of avatar
    avatar.addEventListener('contextmenu', e => {
      e.preventDefault();
      const x = Math.min(e.clientX, window.innerWidth - 200);
      const y = Math.min(e.clientY, window.innerHeight - 100);
      menu.style.left = x + 'px';
      menu.style.top = y + 'px';
      menu.style.display = 'block';
    });

    // Hide menu on click outside
    document.addEventListener('click', () => menu.style.display = 'none');

    // Change profile picture
    document.getElementById('changeBtn').addEventListener('click', () => {
      fileInput.click();
    });

    // Reset to original
    document.getElementById('resetBtn').addEventListener('click', () => {
      localStorage.removeItem('profileImg');
      profileImg.src = 'Pictures/น้องมัจฉะ.gif';
      profileImg.style.display = '';
      fallback.style.display = 'none';
    });

    // Load selected file
    fileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
        localStorage.setItem('profileImg', base64);
        profileImg.src = base64;
        profileImg.style.display = '';
        fallback.style.display = 'none';
        fileInput.value = '';
      };
      reader.readAsDataURL(file);
      fileInput.value = '';
    });