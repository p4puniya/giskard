package ai.giskard.web.dto;

import com.dataiku.j2ts.annotations.UIModel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@UIModel
public class SlicePutDTO {
    private Long projectId;
    private String name;
    private String code;
    private Long id;
}
