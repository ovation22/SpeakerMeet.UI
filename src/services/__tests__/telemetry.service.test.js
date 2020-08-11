import * as ApplicationInsightsReact from '@microsoft/applicationinsights-react-js';
import * as ApplicationInsightsWeb from '@microsoft/applicationinsights-web';
import * as telemetryService from '../telemetry.service';

describe('telemetry.service', () => {
  const mockApplicationInsights = {
    loadAppInsights: jest.fn(),
  };

  beforeEach(() => {
    jest
      .spyOn(ApplicationInsightsWeb, 'ApplicationInsights')
      .mockImplementationOnce(() => mockApplicationInsights);
  });

  describe('applicationInsights', () => {
    it('should expose ai as a function', () => {
      // arrange
      // act
      const result = telemetryService.applicationInsights;

      // assert
      expect(result).toHaveProperty('appInsights');
      expect(result).toHaveProperty('initialize');
      expect(result).toHaveProperty('reactPlugin');
    });

    it('should throw an error given browserHistory is null ', () => {
      // arrange
      const instrumentationKey = 'instrumentationKey';
      const history = null;
      const expectedError = new Error('Could not initialize Telemetry Service');

      // act
      try {
        telemetryService.applicationInsights.initialize(instrumentationKey, history);
      } catch (error) {
        // assert
        expect(error).toEqual(expectedError);
      }
    });

    it('should throw an error given instrumentationKey is null ', () => {
      // arrange
      const instrumentationKey = null;
      const history = {};
      const expectedError = new Error('Could not identify instrumentation key');

      // act
      try {
        telemetryService.applicationInsights.initialize(instrumentationKey, history);
      } catch (error) {
        // assert
        expect(error).toEqual(expectedError);
      }
    });

    it('should not throw an error', () => {
      // arrange
      const instrumentationKey = 'instrumentationKey';
      const history = { listen: jest.fn() };

      jest.spyOn(ApplicationInsightsReact, 'ReactPlugin');

      // act
      telemetryService.applicationInsights.initialize(instrumentationKey, history);

      // assert
    });
  });

  describe('getAppInsights', () => {
    it('should return appInsights', () => {
      // arrange
      // act
      const result = telemetryService.getAppInsights();

      // assert
      expect(result).toBe(mockApplicationInsights);
    });
  });
});
