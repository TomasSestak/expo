package versioned.host.exp.exponent.modules.universal.sensors;

import java.util.Collections;
import java.util.List;

import expo.modules.core.interfaces.InternalModule;

import expo.modules.interfaces.sensors.services.RotationVectorSensorServiceInterface;
import host.exp.exponent.kernel.ExperienceKey;
import host.exp.exponent.kernel.services.sensors.SubscribableSensorKernelService;

public class ScopedRotationVectorSensorService extends BaseSensorService implements InternalModule, RotationVectorSensorServiceInterface {
  public ScopedRotationVectorSensorService(ExperienceKey experienceKey) {
    super(experienceKey);
  }

  @Override
  protected SubscribableSensorKernelService getSensorKernelService() {
    return getKernelServiceRegistry().getRotationVectorSensorKernelService();
  }

  @Override
  public List<Class> getExportedInterfaces() {
    return Collections.<Class>singletonList(RotationVectorSensorServiceInterface.class);
  }
}

