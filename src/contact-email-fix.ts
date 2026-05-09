const oldEmail = 'aalto.mza@gmail.com';
const newEmail = 'info@aaltomantenimiento.com.ar';

function replaceEmailInNode(node: Node) {
  if (node.nodeType === Node.TEXT_NODE && node.textContent?.includes(oldEmail)) {
    node.textContent = node.textContent.replaceAll(oldEmail, newEmail);
    return;
  }

  if (node instanceof HTMLAnchorElement) {
    if (node.href === `mailto:${oldEmail}` || node.getAttribute('href') === `mailto:${oldEmail}`) {
      node.href = `mailto:${newEmail}`;
    }
  }

  if (node instanceof Element) {
    node.childNodes.forEach(replaceEmailInNode);
  }
}

function applyEmailFix() {
  replaceEmailInNode(document.body);
}

window.setTimeout(applyEmailFix, 0);
window.setTimeout(applyEmailFix, 500);
window.setTimeout(applyEmailFix, 1500);

const observer = new MutationObserver(() => applyEmailFix());
observer.observe(document.documentElement, { childList: true, subtree: true });
