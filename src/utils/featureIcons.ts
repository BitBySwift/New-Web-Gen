import { IconType } from 'react-icons';
import {
  HiAcademicCap,
  HiBadgeCheck,
  HiBriefcase,
  HiChatAlt2,
  HiClipboardCheck,
  HiDocumentText,
  HiLightningBolt,
  HiStar,
  HiUserGroup,
} from 'react-icons/hi';

export const getFeatureIcon = (feature: string): IconType => {
  const normalized = feature.toLowerCase();

  if (normalized.includes('resume')) return HiDocumentText;
  if (normalized.includes('mock') || normalized.includes('interview')) return HiChatAlt2;
  if (normalized.includes('certificate')) return HiBadgeCheck;
  if (normalized.includes('job') || normalized.includes('placement')) return HiBriefcase;
  if (
    normalized.includes('project') ||
    normalized.includes('portfolio') ||
    normalized.includes('assignment') ||
    normalized.includes('test')
  ) {
    return HiClipboardCheck;
  }
  if (normalized.includes('mentor') || normalized.includes('mentorship')) return HiUserGroup;
  if (
    normalized.includes('dsa') ||
    normalized.includes('leetcode') ||
    normalized.includes('system design') ||
    normalized.includes('tech stack')
  ) {
    return HiLightningBolt;
  }
  if (normalized.includes('training') || normalized.includes('bootcamp') || normalized.includes('curriculum')) {
    return HiAcademicCap;
  }

  return HiStar;
};
