import React from 'react';
import { PresenterConfig, GymMetrics } from '../types';

import { SlideCapa } from './slides/SlideCapa';
import { SlideResumoExecutivo } from './slides/SlideResumoExecutivo';
import { SlideSobreLotus } from './slides/SlideSobreLotus';
import { SlideCenarioAtual } from './slides/SlideCenarioAtual';
import { SlideGargalos } from './slides/SlideGargalos';
import { SlideObjetivos } from './slides/SlideObjetivos';
import { SlidePilares } from './slides/SlidePilares';
import { SlideMarketing } from './slides/SlideMarketing';
import { SlideFunilComercial } from './slides/SlideFunilComercial';
import { SlideExperiencia } from './slides/SlideExperiencia';
import { SlideLotusClub } from './slides/SlideLotusClub';
import { SlideEstoque } from './slides/SlideEstoque';
import { SlideConvenios } from './slides/SlideConvenios';
import { SlideEcossistema } from './slides/SlideEcossistema';
import { SlideDashboardMockup } from './slides/SlideDashboardMockup';
import { SlideBI } from './slides/SlideBI';
import { SlideIA } from './slides/SlideIA';
import { SlideRoadmap } from './slides/SlideRoadmap';
import { SlideKPIs } from './slides/SlideKPIs';
import { SlideEstimativaImpacto } from './slides/SlideEstimativaImpacto';
import { SlideROIProjeto } from './slides/SlideROIProjeto';
import { SlideVisao2028 } from './slides/SlideVisao2028';
import { SlideEncerramento } from './slides/SlideEncerramento';

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
      return <SlideSobreLotus />;
    case 4:
      return <SlideCenarioAtual gymMetrics={gymMetrics} />;
    case 5:
      return <SlideGargalos />;
    case 6:
      return <SlideObjetivos />;
    case 7:
      return <SlidePilares />;
    case 8:
      return <SlideMarketing />;
    case 9:
      return <SlideFunilComercial />;
    case 10:
      return <SlideExperiencia />;
    case 11:
      return <SlideLotusClub />;
    case 12:
      return <SlideEstoque />;
    case 13:
      return <SlideConvenios />;
    case 14:
      return <SlideEcossistema />;
    case 15:
      return <SlideDashboardMockup gymMetrics={gymMetrics} />;
    case 16:
      return <SlideBI />;
    case 17:
      return <SlideIA />;
    case 18:
      return <SlideRoadmap />;
    case 19:
      return <SlideKPIs gymMetrics={gymMetrics} />;
    case 20:
      return <SlideEstimativaImpacto gymMetrics={gymMetrics} />;
    case 21:
      return <SlideROIProjeto />;
    case 22:
      return <SlideVisao2028 />;
    case 23:
      return <SlideEncerramento presenterConfig={presenterConfig} />;
    default:
      return <SlideCapa presenterConfig={presenterConfig} />;
  }
};
