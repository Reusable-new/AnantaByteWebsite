import { collection, addDoc, query, orderBy, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { db } from "./firebase";
import { storage } from "./firebase";

// Add inquiry/contact submission
export const addInquiry = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "inquiries"), {
      ...data,
      createdAt: new Date().toISOString(),
      status: "new",
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding inquiry:", error);
    throw error;
  }
};

// Get all inquiries
export const getInquiries = async () => {
  try {
    const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return [];
  }
};

// Update inquiry status
export const updateInquiry = async (id, data) => {
  try {
    const docRef = doc(db, "inquiries", id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date().toISOString(),
    });
    return id;
  } catch (error) {
    console.error("Error updating inquiry:", error);
    throw error;
  }
};

// Delete inquiry
export const deleteInquiry = async (id) => {
  try {
    await deleteDoc(doc(db, "inquiries", id));
    return id;
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    throw error;
  }
};

// Add testimonial
export const addTestimonial = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "testimonials"), {
      ...data,
      createdAt: new Date().toISOString(),
      featured: false,
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding testimonial:", error);
    throw error;
  }
};

// Get all testimonials
export const getTestimonials = async () => {
  try {
    const q = query(collection(db, "testimonials"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

// Update testimonial
export const updateTestimonial = async (id, data) => {
  try {
    const docRef = doc(db, "testimonials", id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date().toISOString(),
    });
    return id;
  } catch (error) {
    console.error("Error updating testimonial:", error);
    throw error;
  }
};

// Delete testimonial
export const deleteTestimonial = async (id) => {
  try {
    await deleteDoc(doc(db, "testimonials", id));
    return id;
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    throw error;
  }
};

// Upload testimonial image to Firebase Storage
export const uploadTestimonialImage = async (file) => {
  try {
    if (!file) return null;
    
    const timestamp = Date.now();
    const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const fileName = `testimonials/${timestamp}_${sanitizedFileName}`;
    const storageRef = ref(storage, fileName);
    
    // Upload with metadata
    const metadata = {
      contentType: file.type,
      customMetadata: {
        uploadedAt: new Date().toISOString()
      }
    };
    
    await uploadBytes(storageRef, file, metadata);
    const downloadURL = await getDownloadURL(storageRef);
    
    console.log("Image uploaded successfully:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error(`Image upload failed: ${error.message}`);
  }
};

// Delete testimonial image from Firebase Storage by path
export const deleteTestimonialImage = async (storagePath) => {
  try {
    if (!storagePath) return;
    
    // Extract path from URL if it's a full URL
    let path = storagePath;
    if (storagePath.includes('firebasestorage')) {
      // Extract the encoded path from the URL
      const urlParts = storagePath.split('/o/');
      if (urlParts.length > 1) {
        path = decodeURIComponent(urlParts[1].split('?')[0]);
      }
    }
    
    const fileRef = ref(storage, path);
    await deleteObject(fileRef);
    console.log("Image deleted successfully:", path);
  } catch (error) {
    console.error("Error deleting image:", error);
    // Don't throw - image might not exist or already deleted
  }
};
