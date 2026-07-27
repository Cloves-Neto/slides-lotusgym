import React from 'react';
import { PresenterConfig, GymMetrics } from '../types';

import { SlideCapa } from './slides/SlideCapa';
import { SlideResumoExecutivo } from './slides/SlideResumoExecutivo';
import { SlideComparativoRedes } from './slides/SlideComparativoRedes';
import { SlideGargalos } from './slides/SlideGargalos';
import { SlideObjetivos } from './slides/SlideObjetivos';
import { SlidePilares } from './slides/SlidePilares';
import { SlideMarketing } from './slides/SlideMarketing';
import { SlideFunilComercial } from './slides/SlideFunilComercial';
import { SlideExperiencia } from './slides/SlideExperiencia';
import { SlideLotusClub } from './slides/SlideLotusClub';
import { SlideEquipamentosConveniencia } from './slides/SlideEquipamentosConveniencia';
import { SlideConvenios } from './slides/SlideConvenios';
import { SlideEcossistema } from './slides/SlideEcossistema';
import { SlideDashboardMockup } from './slides/SlideDashboardMockup';
import { SlideBI } from './slides/SlideBI';
import { SlideIA } from './slides/SlideIA';
import { SlideRoadmap } from './slides/SlideRoadmap';
import { SlideIdeiasJessica } from './slides/SlideIdeiasJessica';
import { SlideIdeiasJoceli } from './slides/SlideIdeiasJoceli';
import { SlideSprintsMondayClickUp } from './slides/SlideSprintsMondayClickUp';
import { SlideMatrizIndicadores } from './slides/SlideMatrizIndicadores';
import { SlideVisao2028 } from './slides/SlideVisao2028';

interface SlideRendererProps {
  slideId: number;
  presenterConfig: PresenterConfig;
  gymMetrics: GymMetrics;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slideId,
  presenterConfig,
  gymMetrics
}) => {
  switch (slideId) {
    case 1:
      return <SlideCapa presenterConfig={presenterConfig} />;
    case 2:
      return <SlideResumoExecutivo />;
    case 3:
      return <SlideComparativoRedes />;
    case 4:
      return <SlideGargalos />;
    case 5:
      return <SlideObjetivos />;
    case 6:
      return <SlidePilares />;
    case 7:
      return <SlideMarketing />;
    case 8:
      return <SlideFunilComercial />;
    case 9:
      return <SlideExperiencia />;
    case 10:
      return <SlideLotusClub />;
    case 11:
      return <SlideEquipamentosConveniencia />;
    case 12:
      return <SlideConvenios />;
    case 13:
      return <SlideEcossistema />;
    case 14:
      return <SlideDashboardMockup gymMetrics={gymMetrics} />;
    case 15:
      return <SlideBI />;
    case 16:
      return <SlideIA />;
    case 17:
      return <SlideRoadmap />;
    case 18:
      return <SlideIdeiasJessica />;
    case 19:
      return <SlideIdeiasJoceli />;
    case 20:
      return <SlideSprintsMondayClickUp />;
    case 21:
      return <SlideMatrizIndicadores gymMetrics={gymMetrics} />;
    case 22:
      return <SlideVisao2028 />;
    default:
      return <SlideCapa presenterConfig={presenterConfig} />;
  }
};
