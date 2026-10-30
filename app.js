/**
 * NAIL & GLOW STUDIO BY SIMMI — INTERACTIVE ENGINE
 * Handcrafted for seamless mobile-first experience, instant booking & human warmth.
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '918195921884'; // Simmi's studio WhatsApp number
  const CALL_NUMBER = '08195921884';

  // =========================================================================
  // 1. MOBILE DRAWER NAVIGATION
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-nav-link');

  function openDrawer() {
    mobileDrawer.classList.add('open');
    drawerBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.remove('open');
    drawerBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // =========================================================================
  // 2. STICKY HEADER SCROLL EFFECT
  // =========================================================================
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // =========================================================================
  // 3. SERVICE CATEGORY TABS FILTER
  // =========================================================================
  const tabButtons = document.querySelectorAll('.service-tab-btn');
  const serviceCards = document.querySelectorAll('.service-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active tab style
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');

      // Filter cards
      serviceCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat.includes(category)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================================
  // 4. INTERACTIVE NAIL SHAPE & LENGTH GUIDE
  // =========================================================================
  const shapeData = {
    almond: {
      title: "Almond Silhouette",
      badge: "Simmi's #1 Recommendation",
      img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
      desc: "Softly tapered sides that curve into a gently rounded peak. It creates the optical illusion of longer, more slender fingers without having sharp snagging edges.",
      suitability: "<strong>Best for:</strong> Shorter or wider nail beds, everyday office typing, and chic clean-girl or glazed donut chrome aesthetics.",
      durabilityPct: "88%",
      durabilityLabel: "High (Rounded tip resists chipping)",
      time: "75 mins",
      waMessage: "Hi Simmi! I checked the Nail Shape Guide on your website and loved the Almond shape. Can I book an appointment for almond extensions?"
    },
    coffin: {
      title: "Coffin / Ballerina Silhouette",
      badge: "Trending Instagram Favorite",
      img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=700&q=80",
      desc: "Tapered inwards towards the tip with a crisp flat horizontal edge, mimicking a pointe ballerina shoe. Offers maximum canvas area for ombré, chrome, and Swarovski crystals.",
      suitability: "<strong>Best for:</strong> Medium to long extensions, Punjabi bridal wear, festive parties, and bold nail art statements.",
      durabilityPct: "80%",
      durabilityLabel: "Moderate (Best on medium-long extensions)",
      time: "85 mins",
      waMessage: "Hi Simmi! I'd love to get Coffin / Ballerina extensions with custom nail art. What slots do you have open this week?"
    },
    squoval: {
      title: "Squoval (Square-Oval) Silhouette",
      badge: "Most Durable & Practical",
      img: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=700&q=80",
      desc: "Combines the sharp modern outline of a square with softly rounded outer corners. Zero sharp points to catch on clothing, cooking utensils, or keyboards.",
      suitability: "<strong>Best for:</strong> Working professionals, healthcare staff, busy mothers, and natural nail BIAB builder gel overlays.",
      durabilityPct: "96%",
      durabilityLabel: "Maximum Durability (Zero edge snagging)",
      time: "60 mins",
      waMessage: "Hi Simmi! I want a low-maintenance, sturdy Squoval set for everyday wear. Could you please share available slots?"
    },
    square: {
      title: "Classic Crisp Square Silhouette",
      badge: "Timeless French Elegance",
      img: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=700&q=80",
      desc: "Straight parallel sidewalls meeting a precise 90-degree flat horizontal top. The timeless foundation for crisp white French tips and minimalist line art.",
      suitability: "<strong>Best for:</strong> Naturally long or narrow nail beds; short-to-medium length fans who adore geometric symmetry.",
      durabilityPct: "82%",
      durabilityLabel: "Good (Corners require proper gel reinforcement)",
      time: "70 mins",
      waMessage: "Hi Simmi! I'd like to book a Classic Square French tip extension set at your Phase 11 studio. How do we proceed?"
    },
    stiletto: {
      title: "Stiletto Glam Silhouette",
      badge: "Bold Fashion Statement",
      img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80",
      desc: "Dramatic, ultra-tapered sharp pointed tip. A fierce, high-fashion statement popular in Punjabi music videos and glamorous evening cocktail parties.",
      suitability: "<strong>Best for:</strong> Special wedding functions, red carpet shoots, dramatic bridal receptions, and bold trendsetters.",
      durabilityPct: "70%",
      durabilityLabel: "Statement Glam (Handle with care)",
      time: "90 mins",
      waMessage: "Hi Simmi! I want to get dramatic Stiletto extensions for an upcoming wedding. Could you tell me your slot availability?"
    }
  };

  const shapeTabBtns = document.querySelectorAll('.shape-tab-btn');
  const shapeDisplayCard = document.getElementById('shapeDisplayCard');

  function renderShape(shapeKey) {
    const data = shapeData[shapeKey];
    if (!data || !shapeDisplayCard) return;

    shapeDisplayCard.innerHTML = `
      <div class="shape-display-grid">
        <div class="shape-visual-box">
          <img src="${data.img}" alt="${data.title} at Nail and Glow Studio Mohali" loading="lazy">
          <span class="shape-badge-pill">${data.badge}</span>
        </div>
        <div class="shape-info-col">
          <h3 class="shape-name-heading">${data.title}</h3>
          <p class="shape-desc-text">${data.desc}</p>
          <div class="shape-suitability-box">
            ${data.suitability}
          </div>
          <div class="shape-meta-bars">
            <div class="shape-meter-row">
              <span>Durability: ${data.durabilityLabel}</span>
              <div class="durability-bar">
                <div class="durability-fill" style="width: ${data.durabilityPct};"></div>
              </div>
            </div>
            <div class="shape-meter-row">
              <span>Salon Duration: ~${data.time}</span>
              <span style="color: #15803D; font-weight: 700;">★ 4-Week Guaranteed Hold</span>
            </div>
          </div>
          <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(data.waMessage)}" target="_blank" rel="noopener noreferrer" class="shape-request-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
            <span>Request This Shape with Simmi</span>
          </a>
        </div>
      </div>
    `;
  }

  shapeTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      shapeTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const shape = btn.getAttribute('data-shape');
      renderShape(shape);
    });
  });

  // Initial render for Almond
  renderShape('almond');

  // =========================================================================
  // 5. INTERACTIVE PAMPER PACKAGE CALCULATOR
  // =========================================================================
  const calcCheckboxes = document.querySelectorAll('.calc-checkbox');
  const summarySelectedList = document.getElementById('summarySelectedList');
  const summaryTotalTime = document.getElementById('summaryTotalTime');
  const summaryTotalPrice = document.getElementById('summaryTotalPrice');
  const bookCalculatedBtn = document.getElementById('bookCalculatedBtn');

  function updateCalculator() {
    let totalPrice = 0;
    let totalMinutes = 0;
    const selectedItems = [];

    calcCheckboxes.forEach(cb => {
      const parentLabel = cb.closest('.calc-item-label');
      if (cb.checked) {
        parentLabel.classList.add('selected');
        const name = cb.getAttribute('data-name');
        const price = parseInt(cb.getAttribute('data-price'), 10);
        const time = parseInt(cb.getAttribute('data-time'), 10);

        totalPrice += price;
        totalMinutes += time;
        selectedItems.push({ name, price, time });
      } else {
        parentLabel.classList.remove('selected');
      }
    });

    // Render summary list
    if (selectedItems.length === 0) {
      summarySelectedList.innerHTML = `
        <div class="empty-summary-hint">
          Tap services on the left to estimate your customized pamper session ✨
        </div>
      `;
      summaryTotalTime.textContent = '0 mins';
      summaryTotalPrice.textContent = '₹0';
      bookCalculatedBtn.disabled = true;
      bookCalculatedBtn.style.opacity = '0.6';
      bookCalculatedBtn.style.cursor = 'not-allowed';
    } else {
      let listHtml = '';
      selectedItems.forEach(item => {
        listHtml += `
          <div class="summary-item-row">
            <span>• ${item.name}</span>
            <span>₹${item.price.toLocaleString('en-IN')}</span>
          </div>
        `;
      });
      summarySelectedList.innerHTML = listHtml;

      // Format time
      const hours = Math.floor(totalMinutes / 60);
      const mins = totalMinutes % 60;
      let timeStr = '';
      if (hours > 0) timeStr += `${hours} hr `;
      if (mins > 0 || hours === 0) timeStr += `${mins} min`;

      summaryTotalTime.textContent = `~${timeStr.trim()}`;
      summaryTotalPrice.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
      bookCalculatedBtn.disabled = false;
      bookCalculatedBtn.style.opacity = '1';
      bookCalculatedBtn.style.cursor = 'pointer';
    }

    // Attach custom message to button
    bookCalculatedBtn.onclick = () => {
      if (selectedItems.length === 0) {
        showToast('Please select at least one service!');
        return;
      }

      let message = `Hello Simmi! 👋 I used the price estimator on your Nail & Glow Studio website and would like to book:\n\n`;
      selectedItems.forEach(item => {
        message += `• ${item.name} (₹${item.price})\n`;
      });
      message += `\nEstimated Duration: ${summaryTotalTime.textContent}`;
      message += `\nEstimated Total: ${summaryTotalPrice.textContent}`;
      message += `\n\nCould you please let me know your earliest available slot? Thank you! ❤️`;

      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    };
  }

  calcCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateCalculator);
  });

  // Initialize calculator
  updateCalculator();

  // =========================================================================
  // 6. BOOKING MODAL SYSTEM
  // =========================================================================
  const bookingModal = document.getElementById('bookingModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const bookingForm = document.getElementById('bookingForm');
  const serviceSelectInput = document.getElementById('bookingServiceSelect');

  const openModalButtons = document.querySelectorAll('.js-open-booking-modal');

  function openBookingModal(preSelectedService = '') {
    if (preSelectedService && serviceSelectInput) {
      serviceSelectInput.value = preSelectedService;
    }
    bookingModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Set minimum date to today
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
      if (!dateInput.value) dateInput.value = today;
    }
  }

  function closeBookingModal() {
    bookingModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service') || '';
      openBookingModal(serviceName);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeBookingModal);
  if (bookingModal) {
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeBookingModal();
    });
  }

  // Handle Form Submission -> WhatsApp Handshake
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('bookingName').value.trim();
      const phone = document.getElementById('bookingPhone').value.trim();
      const service = document.getElementById('bookingServiceSelect').value;
      const date = document.getElementById('bookingDate').value;
      const time = document.getElementById('bookingTime').value;
      const notes = document.getElementById('bookingNotes').value.trim();

      if (!name || !phone) {
        showToast('Please fill in your name and phone number');
        return;
      }

      let message = `Hi Simmi! 👋 I would like to book an appointment at Nail & Glow Studio (Phase 11 Mohali):\n\n`;
      message += `👤 Name: ${name}\n`;
      message += `📞 Phone: ${phone}\n`;
      message += `💅 Desired Service: ${service}\n`;
      message += `📅 Preferred Date: ${date}\n`;
      message += `⏰ Preferred Time: ${time}\n`;
      if (notes) {
        message += `📝 Special Requests: ${notes}\n`;
      }
      message += `\nPlease confirm if this slot is available. Thank you!`;

      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      
      closeBookingModal();
      showToast('Opening WhatsApp with Simmi...');
      
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 400);
    });
  }

  // =========================================================================
  // 7. LOOKBOOK STYLE REQUESTS VIA WHATSAPP
  // =========================================================================
  const lookbookCards = document.querySelectorAll('.gallery-card');

  lookbookCards.forEach(card => {
    card.addEventListener('click', () => {
      const styleName = card.getAttribute('data-style-name') || 'Nail Art Design';
      const styleCategory = card.getAttribute('data-style-cat') || 'Trending Nails';

      const message = `Hi Simmi! ✨ I saw the "${styleName}" (${styleCategory}) in your website lookbook and would love to get something similar done on my nails. Are you taking appointments this week?`;
      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  });

  // =========================================================================
  // 8. FAQ ACCORDION INTERACTIVITY
  // =========================================================================
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const header = card.querySelector('.faq-header');
    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');

      // Close all others for clean UX
      faqCards.forEach(c => c.classList.remove('open'));

      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });

  // =========================================================================
  // 9. DIRECT SERVICE BOOK BUTTONS (Pre-fill WhatsApp)
  // =========================================================================
  const directBookBtns = document.querySelectorAll('.js-quick-wa-book');
  directBookBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const serviceName = btn.getAttribute('data-service') || 'Salon Service';
      const price = btn.getAttribute('data-price') || '';

      let message = `Hi Simmi! 👋 I would like to inquire about booking: "${serviceName}"`;
      if (price) message += ` (${price})`;
      message += ` at your Phase 11 Mohali studio. Could you tell me what slots you have open?`;

      const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(waUrl, '_blank');
    });
  });

  // =========================================================================
  // 10. FLOATING WHATSAPP TOOLTIP DISMISSAL
  // =========================================================================
  const waTooltip = document.getElementById('waTooltip');
  const waTooltipClose = document.getElementById('waTooltipClose');

  if (waTooltipClose && waTooltip) {
    waTooltipClose.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      waTooltip.style.opacity = '0';
      waTooltip.style.pointerEvents = 'none';
      setTimeout(() => {
        waTooltip.style.display = 'none';
      }, 300);
    });
  }

  // =========================================================================
  // 11. TOAST NOTIFICATION UTILITY
  // =========================================================================
  function showToast(message) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>✨</span><span>${message}</span>`;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
});
