// Copyright (c) 2012 eagleonhill(qiuc12@gmail.com). All rights reserved.
// Use of this source code is governed by a Mozilla-1.1 license that can be
// found in the LICENSE file.

replaceDocument();
pageDOMLoaded = true;
if (needNotifyBar) {
  showNotifyBar();
}

window.addEventListener('load', replaceDocument, false);
