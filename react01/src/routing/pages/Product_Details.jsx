import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const Product_Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const playSuccessTone = () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      const audioCtx = new AudioContextClass();
  
      const playTone = (
        frequency,
        startOffsetSec,
        durationSec,
        type = 'triangle',
        volume = 0.50 // 🔊 higher default volume
      ) => {
        const oscillator = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
  
        oscillator.type = type;
        oscillator.frequency.setValueAtTime(
          frequency,
          audioCtx.currentTime + startOffsetSec
        );
  
        gain.gain.setValueAtTime(0.0001, audioCtx.currentTime + startOffsetSec);
        gain.gain.exponentialRampToValueAtTime(
          volume,
          audioCtx.currentTime + startOffsetSec + 0.02
        );
        gain.gain.exponentialRampToValueAtTime(
          0.0001,
          audioCtx.currentTime + startOffsetSec + durationSec
        );
  
        oscillator.connect(gain);
        gain.connect(audioCtx.destination);
        oscillator.start(audioCtx.currentTime + startOffsetSec);
        oscillator.stop(audioCtx.currentTime + startOffsetSec + durationSec + 0.05);
      };
  
      // Louder, professional success chime
      playTone(523.25, 0.0, 0.25, 'triangle', 2);  // C5
      playTone(659.25, 0.05, 0.25, 'triangle', 2); // E5
      playTone(783.99, 0.10, 0.35, 'triangle', 2); // G5
      playTone(1046.5, 0.15, 0.35, 'sine', 0.25);    // C6
      playTone(1318.5, 0.35, 0.20, 'sine', 0.22);    // E6 sparkle
  
      setTimeout(() => {
        audioCtx.close();
      }, 1500);
    } catch (err) {
      console.warn('Audio playback not available', err);
    }
  };
  
  
  const courses = [
    {
      id: "MernS001",
      course_name: "MERN Stack",
      price: 1200,
      duration: "6 months",
      level: "Beginner",
      seats: 25
    },
    {
      id: "JavaFS002",
      course_name: "Java Full Stack",
      price: 20000,
      duration: "7 months",
      level: "Intermediate",
      seats: 30
    },
    {
      id: "PyFS003",
      course_name: "Python Full Stack",
      price: 30000,
      duration: "10 months",
      level: "Advanced",
      seats: 20
    },
    {
      id: "ReactC004",
      course_name: "React Course",
      price: 35000,
      duration: "6 months",
      level: "Beginner",
      seats: 40
    },
    {
      id: "NodeJS005",
      course_name: "Node.js Backend Development",
      price: 15000,
      duration: "5 months",
      level: "Intermediate",
      seats: 25
    },
    {
      id: "AngularC006",
      course_name: "Angular Development",
      price: 18000,
      duration: "5 months",
      level: "Intermediate",
      seats: 30
    },
    {
      id: "VueJS007",
      course_name: "Vue.js Development",
      price: 17000,
      duration: "4 months",
      level: "Beginner",
      seats: 35
    },
    {
      id: "PHPFS008",
      course_name: "PHP Full Stack",
      price: 22000,
      duration: "8 months",
      level: "Intermediate",
      seats: 28
    },
    {
      id: "DotNetFS009",
      course_name: ".NET Full Stack",
      price: 25000,
      duration: "9 months",
      level: "Advanced",
      seats: 20
    },
    {
      id: "DSA010",
      course_name: "Data Structures & Algorithms",
      price: 10000,
      duration: "4 months",
      level: "Intermediate",
      seats: 40
    },
    {
      id: "AI011",
      course_name: "Artificial Intelligence",
      price: 45000,
      duration: "12 months",
      level: "Advanced",
      seats: 15
    },
    {
      id: "ML012",
      course_name: "Machine Learning",
      price: 40000,
      duration: "10 months",
      level: "Advanced",
      seats: 20
    },
    {
      id: "DL013",
      course_name: "Deep Learning",
      price: 50000,
      duration: "12 months",
      level: "Advanced",
      seats: 15
    },
    {
      id: "DS014",
      course_name: "Data Science",
      price: 42000,
      duration: "10 months",
      level: "Advanced",
      seats: 18
    },
    {
      id: "CC015",
      course_name: "Cloud Computing",
      price: 35000,
      duration: "8 months",
      level: "Intermediate",
      seats: 25
    },
    {
      id: "AWS016",
      course_name: "AWS Solutions Architect",
      price: 38000,
      duration: "6 months",
      level: "Advanced",
      seats: 20
    },
    {
      id: "Azure017",
      course_name: "Microsoft Azure Fundamentals",
      price: 34000,
      duration: "6 months",
      level: "Intermediate",
      seats: 25
    },
    {
      id: "GCP018",
      course_name: "Google Cloud Platform",
      price: 35000,
      duration: "6 months",
      level: "Intermediate",
      seats: 20
    },
    {
      id: "DevOps019",
      course_name: "DevOps with CI/CD",
      price: 30000,
      duration: "5 months",
      level: "Intermediate",
      seats: 25
    },
    {
      id: "Cyber020",
      course_name: "Cyber Security",
      price: 40000,
      duration: "9 months",
      level: "Advanced",
      seats: 15
    },
    {
      id: "EthHack021",
      course_name: "Ethical Hacking",
      price: 35000,
      duration: "8 months",
      level: "Intermediate",
      seats: 20
    },
    {
      id: "UIUX022",
      course_name: "UI/UX Design",
      price: 15000,
      duration: "4 months",
      level: "Beginner",
      seats: 35
    },
    {
      id: "Flutter023",
      course_name: "Flutter App Development",
      price: 20000,
      duration: "5 months",
      level: "Beginner",
      seats: 30
    },
    {
      id: "Android024",
      course_name: "Android Development (Java/Kotlin)",
      price: 25000,
      duration: "6 months",
      level: "Intermediate",
      seats: 28
    },
    {
      id: "iOS025",
      course_name: "iOS Development (Swift)",
      price: 28000,
      duration: "6 months",
      level: "Intermediate",
      seats: 25
    }
  ];
  

  const course = courses.find((c) => c.id === id);

  const handleEnroll = () => {
    setIsModalOpen(true);
    playSuccessTone();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!course) {
    return (
      <div style={styles.container}>
        <div style={styles.errorBox}>
          <h2 style={styles.errorTitle}>Course not found</h2>
          <Link to="/product" style={styles.backLink}>Back to courses</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{course.course_name}</h1>
        {location.pathname != `/product/${id}` && <>
        <p style={styles.subtitle}>ID: {course.id.trim()}</p>
        </>}
      </div>

      <div style={styles.cardWrapper}>
        <div style={styles.card}>
          <div style={styles.cardBody}>
            <div style={styles.badgesRow}>
              <span style={styles.badge}>Level: {course.level}</span>
              <span style={styles.badgeAlt}>Seats: {course.seats}</span>
            </div>

            <div style={styles.detailsRow}>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Duration</div>
                <div style={styles.detailValue}>{course.duration}</div>
              </div>
              <div style={styles.detailItem}>
                <div style={styles.detailLabel}>Price</div>
                <div style={styles.detailValue}>₹{course.price.toLocaleString()}</div>
              </div>
            </div>

            <div style={styles.progressWrap}>
              <div style={styles.progressFill}/>
            </div>

            <div style={styles.actionsRow}>
              <Link to="/product" style={styles.secondaryButton}>Back to Courses</Link>
              <button onClick={handleEnroll} style={styles.primaryButton}>Enroll Now</button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div style={styles.modalOverlay} role="dialog" aria-modal="true">
          <div style={styles.modal}>
            <div style={styles.modalHeader}>🎉 Enrollment Confirmed</div>
            <div style={styles.modalBody}>
              <div style={styles.modalTitle}>{course.course_name}</div>
              <div style={styles.modalText}>You have enrolled in this course successfully.</div>
              <div style={styles.modalMetaRow}>
                <span style={styles.modalPill}>ID: {course.id}</span>
                <span style={styles.modalPill}>Level: {course.level}</span>
                <span style={styles.modalPill}>Duration: {course.duration}</span>
                <span style={styles.modalPill}>Seats Left: {course.seats}</span>
              </div>
            </div>
            <div style={styles.modalActions}>
              <button onClick={closeModal} style={styles.closeButton}>Close</button>
              <Link to="/product" style={styles.goButton}>Go to Courses</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '28px 20px',
    background: 'linear-gradient(135deg, #fff1f7 0%, #eef6ff 50%, #eafff3 100%)',
    fontFamily: 'Inter, Segoe UI, Roboto, Arial, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: 18
  },
  title: {
    margin: 0,
    fontSize: '2.2rem',
    fontWeight: 800,
    backgroundImage: 'linear-gradient(90deg, #ff7a7a, #ffb36b, #6bbcff, #6be2a1)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  },
  subtitle: {
    marginTop: 6,
    color: '#475569',
    opacity: 0.85
  },
  cardWrapper: {
    maxWidth: 760,
    margin: '0 auto',
    padding: 1,
    borderRadius: 18,
    background: 'linear-gradient(135deg, #ffd8e6, #d9e7ff, #d9ffe2)'
  },
  card: {
    background: '#fff',
    borderRadius: 18,
    boxShadow: '0 14px 30px rgba(2, 6, 23, 0.08)'
  },
  cardBody: {
    padding: '20px 18px'
  },
  badgesRow: {
    display: 'flex',
    gap: 10,
    marginBottom: 12
  },
  badge: {
    fontSize: 12,
    color: '#fff',
    background: 'linear-gradient(90deg, #0ea5e9, #22c55e)',
    borderRadius: 999,
    padding: '6px 10px',
    fontWeight: 700
  },
  badgeAlt: {
    fontSize: 12,
    color: '#0f172a',
    background: 'linear-gradient(90deg, #e0f2fe, #ffedd5)',
    borderRadius: 999,
    padding: '6px 10px',
    fontWeight: 700
  },
  detailsRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 12,
    marginTop: 12
  },
  detailItem: {
    background: '#f8fafc',
    borderRadius: 12,
    padding: '12px 12px'
  },
  detailLabel: {
    fontSize: 12,
    color: '#64748b'
  },
  detailValue: {
    marginTop: 4,
    fontSize: '1.05rem',
    fontWeight: 800,
    color: '#0f172a'
  },
  progressWrap: {
    position: 'relative',
    marginTop: 18,
    height: 8,
    borderRadius: 999,
    background: '#f1f5f9',
    overflow: 'hidden'
  },
  progressFill: {
    position: 'absolute',
    inset: 0,
    width: '70%',
    background: 'linear-gradient(90deg, #ff7a7a, #ffb36b, #6bbcff, #6be2a1)'
  },
  actionsRow: {
    display: 'flex',
    gap: 12,
    marginTop: 18
  },
  secondaryButton: {
    flex: 1,
    textAlign: 'center',
    textDecoration: 'none',
    background: '#e2e8f0',
    color: '#0f172a',
    padding: '10px 14px',
    borderRadius: 12,
    fontWeight: 700
  },
  primaryButton: {
    flex: 1,
    background: 'linear-gradient(90deg, #E65C00, #F9D423)',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    padding: '10px 14px',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 8px 18px rgba(230,92,0,0.25)'
  },
  errorBox: {
    maxWidth: 600,
    margin: '80px auto 0',
    textAlign: 'center',
    background: '#fff',
    borderRadius: 16,
    padding: '24px 20px',
    boxShadow: '0 14px 30px rgba(2, 6, 23, 0.08)'
  },
  errorTitle: {
    margin: 0,
    fontSize: '1.4rem',
    color: '#ef4444',
    fontWeight: 800
  },
  backLink: {
    display: 'inline-block',
    marginTop: 10,
    textDecoration: 'none',
    color: '#2563eb',
    fontWeight: 700
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(2, 6, 23, 0.55)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    zIndex: 50
  },
  modal: {
    width: '100%',
    maxWidth: 560,
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 24px 48px rgba(2, 6, 23, 0.35)'
  },
  modalHeader: {
    padding: '14px 16px',
    fontWeight: 800,
    background: 'linear-gradient(90deg, #ff7a7a, #ffb36b, #6bbcff, #6be2a1)',
    color: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  modalBody: {
    padding: '16px 16px 6px'
  },
  modalTitle: {
    fontSize: '1.15rem',
    fontWeight: 800,
    color: '#0f172a'
  },
  modalText: {
    marginTop: 6,
    color: '#334155'
  },
  modalMetaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12
  },
  modalPill: {
    fontSize: 12,
    color: '#0f172a',
    background: 'linear-gradient(90deg, #e0f2fe, #ffedd5)',
    borderRadius: 999,
    padding: '6px 10px',
    fontWeight: 700
  },
  modalActions: {
    display: 'flex',
    gap: 10,
    padding: '12px 16px 16px'
  },
  closeButton: {
    flex: 1,
    background: '#e2e8f0',
    color: '#0f172a',
    border: 'none',
    borderRadius: 12,
    padding: '10px 14px',
    fontWeight: 700,
    cursor: 'pointer'
  },
  goButton: {
    flex: 1,
    textAlign: 'center',
    textDecoration: 'none',
    background: 'linear-gradient(90deg, #0ea5e9, #22c55e)',
    color: '#fff',
    borderRadius: 12,
    padding: '10px 14px',
    fontWeight: 700
  }
};

export default Product_Details;
