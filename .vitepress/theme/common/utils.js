export function isMobileDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  // 检查是否包含移动设备的标志
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
}

