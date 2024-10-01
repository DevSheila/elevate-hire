import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// Validation schema
const resumeSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  summary: yup.string().max(500, 'Summary should not exceed 500 characters'),
  experience: yup.string().required('Work experience is required'),
  education: yup.string().required('Education is required'),
});

const ResumeEditor = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(resumeSchema),
  });

  const [isEditingSummary, setIsEditingSummary] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [isEditingEducation, setIsEditingEducation] = useState(false);

  const [summary, setSummary] = useState('This is a sample professional summary.');
  const [experience, setExperience] = useState('Sample work experience.');
  const [education, setEducation] = useState('Sample education.');

  const onSubmit = (data) => {
    const formData = {
      ...data,
      summary,
      experience,
      education,
    };
    console.log('Resume data:', formData);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Resume Editor</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-lg shadow-md space-y-6 max-w-4xl mx-auto">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName" className="font-semibold">Full Name</Label>
          <Input {...register('fullName')} id="fullName" placeholder="Your full name" className="w-full" />
          {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="font-semibold">Email</Label>
          <Input {...register('email')} id="email" placeholder="Your email" className="w-full" />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="font-semibold">Phone</Label>
          <Input {...register('phone')} id="phone" placeholder="Your phone number" className="w-full" />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
        </div>

        {/* Professional Summary - Toggles between display and edit mode */}
        <div className="space-y-2">
          <Label className="font-semibold">Professional Summary</Label>
          {!isEditingSummary ? (
            <div onClick={() => setIsEditingSummary(true)} className="cursor-pointer border border-gray-300 p-3 rounded-md">
              <p>{summary || 'Click to add your professional summary'}</p>
            </div>
          ) : (
            <>
              <Textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="A brief summary about you"
                rows={4}
                className="w-full"
              />
              <Button onClick={() => setIsEditingSummary(false)} className="mt-2">Save Summary</Button>
            </>
          )}
        </div>

        {/* Work Experience - Toggles between display and edit mode */}
        <div className="space-y-2">
          <Label className="font-semibold">Work Experience</Label>
          {!isEditingExperience ? (
            <div onClick={() => setIsEditingExperience(true)} className="cursor-pointer border border-gray-300 p-3 rounded-md">
              <p>{experience || 'Click to add your work experience'}</p>
            </div>
          ) : (
            <>
              <ReactQuill value={experience} onChange={setExperience} className="w-full border border-gray-300 p-2 rounded-md" />
              <Button onClick={() => setIsEditingExperience(false)} className="mt-2">Save Experience</Button>
            </>
          )}
        </div>

        {/* Education - Toggles between display and edit mode */}
        <div className="space-y-2">
          <Label className="font-semibold">Education</Label>
          {!isEditingEducation ? (
            <div onClick={() => setIsEditingEducation(true)} className="cursor-pointer border border-gray-300 p-3 rounded-md">
              <p>{education || 'Click to add your education'}</p>
            </div>
          ) : (
            <>
              <ReactQuill value={education} onChange={setEducation} className="w-full border border-gray-300 p-2 rounded-md" />
              <Button onClick={() => setIsEditingEducation(false)} className="mt-2">Save Education</Button>
            </>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
          Save Resume
        </Button>
      </form>
    </div>
  );
};

export default ResumeEditor;
